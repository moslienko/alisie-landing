#!/usr/bin/env node
/**
 * Blog build script (approach B).
 *
 * Reads a Markdown article from src/_drafts/ (git-ignored, local only), converts
 * it to a self-contained .astro page under src/pages/blog/, and refreshes the
 * post registry used by the blog index. Raw .md never enters the public repo.
 *
 * Usage:
 *   node scripts/build-post.mjs my-article        # builds src/_drafts/my-article.md
 *   node scripts/build-post.mjs --all             # builds every .md in _drafts
 */

import { readFileSync, writeFileSync, readdirSync, existsSync, mkdirSync } from 'node:fs'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const ROOT = join(__dirname, '..')
const DRAFTS = join(ROOT, 'src', '_drafts')
const OUT = join(ROOT, 'src', 'pages', 'blog')
const REGISTRY = join(ROOT, 'src', 'data', 'blogPosts.ts')
const SITEMAP = join(ROOT, 'public', 'sitemap.xml')
const SITE = 'https://alisie.app'

// ---------- frontmatter ----------
function parseFrontmatter(raw) {
  const m = raw.match(/^---\n([\s\S]*?)\n---\n?([\s\S]*)$/)
  if (!m) throw new Error('Missing frontmatter (--- block) at top of file')
  const data = {}
  for (const line of m[1].split('\n')) {
    const idx = line.indexOf(':')
    if (idx === -1) continue
    const key = line.slice(0, idx).trim()
    let val = line.slice(idx + 1).trim()
    val = val.replace(/^["']|["']$/g, '')
    data[key] = val
  }
  return { data, body: m[2] }
}

// ---------- minimal, safe markdown -> HTML ----------
// Supports: h2/h3, paragraphs, - lists, **bold**, *italic*, [links](url),
// > blockquotes, and raw HTML blocks (for theme-aware <img> you write yourself).
function inline(t) {
  // Links FIRST — their label may contain ** or * (e.g. [**Alisie**](url)).
  // The label is kept verbatim so a later bold/italic pass formats it.
  // External links open in a new tab; internal ones stay in the same tab.
  return t
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, (_m, label, href) => {
      const ext = /^https?:\/\//.test(href)
      const attrs = ext ? ' target="_blank" rel="noopener noreferrer"' : ''
      return `<a href="${href}"${attrs}>${label}</a>`
    })
    .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
    .replace(/(^|[^*])\*([^*]+)\*/g, '$1<em>$2</em>')
}

function mdToHtml(md) {
  const lines = md.split('\n')
  const out = []
  let para = []
  let list = []
  let listType = 'ul' // 'ul' for "- ", 'ol' for "1. "
  const flushPara = () => {
    if (para.length) {
      out.push(`<p>${inline(para.join(' ').trim())}</p>`)
      para = []
    }
  }
  const flushList = () => {
    if (list.length) {
      const items = list.map((li) => `<li>${inline(li)}</li>`).join('')
      out.push(`<${listType}>${items}</${listType}>`)
      list = []
    }
  }
  for (const line of lines) {
    const t = line.trim()
    // Raw HTML block (e.g. a theme-aware <img> figure) — pass through untouched.
    if (t.startsWith('<')) {
      flushPara()
      flushList()
      out.push(line)
      continue
    }
    if (t === '') {
      flushPara()
      flushList()
      continue
    }
    if (t.startsWith('### ')) {
      flushPara()
      flushList()
      out.push(`<h3>${inline(t.slice(4))}</h3>`)
    } else if (t.startsWith('## ')) {
      flushPara()
      flushList()
      out.push(`<h2>${inline(t.slice(3))}</h2>`)
    } else if (t.startsWith('> ')) {
      flushPara()
      flushList()
      out.push(`<blockquote>${inline(t.slice(2))}</blockquote>`)
    } else if (t.startsWith('- ')) {
      flushPara()
      if (listType !== 'ul') flushList()
      listType = 'ul'
      list.push(t.slice(2))
    } else if (/^\d+\.\s/.test(t)) {
      flushPara()
      if (listType !== 'ol') flushList()
      listType = 'ol'
      list.push(t.replace(/^\d+\.\s+/, ''))
    } else {
      flushList()
      para.push(t)
    }
  }
  flushPara()
  flushList()
  return out.join('\n')
}

function escapeAttr(s) {
  return s.replace(/"/g, '&quot;')
}

// ---------- build one post ----------
function build(name) {
  const src = join(DRAFTS, `${name}.md`)
  if (!existsSync(src)) throw new Error(`Not found: ${src}`)
  const { data, body } = parseFrontmatter(readFileSync(src, 'utf8'))

  for (const req of ['title', 'description', 'pubDate']) {
    if (!data[req]) throw new Error(`Frontmatter missing "${req}" in ${name}.md`)
  }
  const slug = data.slug || name
  const lang = data.lang || 'en'
  // The layout renders the H1 from the frontmatter title, so drop a leading
  // "# ..." in the body to avoid a duplicate H1. Author can leave it in the .md.
  const cleanBody = body.replace(/^\s*#\s+.*\n?/, '')
  const html = mdToHtml(cleanBody)

  const page = `---
// AUTO-GENERATED from src/_drafts/${name}.md by scripts/build-post.mjs
// Do not edit by hand — edit the .md source and rebuild.
import BlogPostLayout from '../../layouts/BlogPostLayout.astro'
---

<BlogPostLayout
  locale="${lang}"
  title="${escapeAttr(data.title)}"
  description="${escapeAttr(data.description)}"
  path="/blog/${slug}"
  pubDate={new Date('${data.pubDate}')}
${data.updatedDate ? `  updatedDate={new Date('${data.updatedDate}')}\n` : ''}>
${html}
</BlogPostLayout>
`

  if (!existsSync(OUT)) mkdirSync(OUT, { recursive: true })
  writeFileSync(join(OUT, `${slug}.astro`), page)
  return { slug, title: data.title, description: data.description, pubDate: data.pubDate, lang }
}

// ---------- registry (metadata only, for the blog index) ----------
function rebuildRegistry() {
  const files = readdirSync(OUT).filter((f) => f.endsWith('.astro') && f !== 'index.astro')
  const posts = files.map((f) => {
    const content = readFileSync(join(OUT, f), 'utf8')
    const title = content.match(/title="([^"]*)"/)?.[1] ?? ''
    const description = content.match(/description="([^"]*)"/)?.[1] ?? ''
    const path = content.match(/path="([^"]*)"/)?.[1] ?? ''
    const pubDate = content.match(/pubDate=\{new Date\('([^']*)'\)\}/)?.[1] ?? ''
    const lang = content.match(/locale="([^"]*)"/)?.[1] ?? 'en'
    return { slug: path.replace('/blog/', ''), title, description, pubDate, lang }
  })
  posts.sort((a, b) => new Date(b.pubDate) - new Date(a.pubDate))
  const ts = `// AUTO-GENERATED by scripts/build-post.mjs — do not edit by hand.
export interface BlogPostMeta {
  slug: string
  title: string
  description: string
  pubDate: string
  lang: 'en' | 'ru'
}

export const blogPosts: BlogPostMeta[] = ${JSON.stringify(posts, null, 2)}
`
  if (!existsSync(dirname(REGISTRY))) mkdirSync(dirname(REGISTRY), { recursive: true })
  writeFileSync(REGISTRY, ts)
  return posts
}

// ---------- sitemap (blog URLs, between BLOG:START / BLOG:END markers) ----------
// The rest of sitemap.xml is hand-maintained; we only rewrite the block between
// the markers so manual entries (home, legal, etc.) are never touched.
function rebuildSitemap(posts) {
  if (!existsSync(SITEMAP)) return
  const xml = readFileSync(SITEMAP, 'utf8')
  const start = '<!-- BLOG:START (auto-generated by scripts/build-post.mjs — do not edit by hand) -->'
  const end = '<!-- BLOG:END -->'
  const s = xml.indexOf(start)
  const e = xml.indexOf(end)
  if (s === -1 || e === -1) {
    console.warn('⚠ sitemap markers not found — skipped (add BLOG:START / BLOG:END to public/sitemap.xml)')
    return
  }
  // Each post: canonical loc on its own locale. No cross-locale hreflang, since a
  // post has no translated twin yet (matches the noAlternates policy in the head).
  const urls = posts
    .map((p) => {
      const loc = p.lang === 'ru' ? `${SITE}/ru/blog/${p.slug}` : `${SITE}/blog/${p.slug}`
      return `  <url>\n    <loc>${loc}</loc>\n  </url>`
    })
    .join('\n')
  const block = `${start}\n${urls}${urls ? '\n' : ''}  ${end}`
  const next = xml.slice(0, s) + block + xml.slice(e + end.length)
  writeFileSync(SITEMAP, next)
}

// ---------- main ----------
const arg = process.argv[2]
if (!arg) {
  console.error('Usage: node scripts/build-post.mjs <name> | --all')
  process.exit(1)
}
try {
  if (arg === '--all') {
    const names = readdirSync(DRAFTS).filter((f) => f.endsWith('.md')).map((f) => f.replace(/\.md$/, ''))
    names.forEach((n) => {
      const r = build(n)
      console.log(`✓ ${n}.md → src/pages/blog/${r.slug}.astro`)
    })
  } else {
    const r = build(arg)
    console.log(`✓ ${arg}.md → src/pages/blog/${r.slug}.astro`)
  }
  const posts = rebuildRegistry()
  console.log('✓ updated src/data/blogPosts.ts')
  rebuildSitemap(posts)
  console.log('✓ updated public/sitemap.xml')
} catch (e) {
  console.error('✗', e.message)
  process.exit(1)
}
