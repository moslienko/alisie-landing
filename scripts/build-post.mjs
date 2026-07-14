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
const PUBLIC = join(ROOT, 'public')
const REGISTRY = join(ROOT, 'src', 'data', 'blogPosts.ts')
const SITEMAP = join(ROOT, 'public', 'sitemap.xml')
const SITE = 'https://alisie.app'

// ---------- images ----------
// Intrinsic size straight from the PNG header: bytes 16..24 of the IHDR chunk are
// width and height as big-endian uint32. Cheap enough to avoid an image library,
// and width/height on <img> are required — without them indexing suffers and the
// page shifts on load (CLS).
function pngSize(publicSrc) {
  const file = join(PUBLIC, publicSrc.replace(/^\//, ''))
  if (!existsSync(file)) return null
  const buf = readFileSync(file)
  if (buf.length < 24 || buf.readUInt32BE(0) !== 0x89504e47) return null
  return { width: buf.readUInt32BE(16), height: buf.readUInt32BE(20) }
}

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
//
// Cross-links between articles are written as plain "/blog/<slug>" regardless of
// the target's locale — RU posts route under "/ru/blog/<slug>", EN under
// "/blog/<slug>", and an author linking a RU article from another RU article has
// no way to know that at write time short of memorizing the routing rule. Get it
// wrong and the link 404s silently (it builds fine — nothing catches it before a
// reader clicks it). So the build prefixes "/blog/" links with "/ru" whenever the
// *linking* article is Russian, matching how that article's own page is routed.
// This assumes RU articles only ever link RU articles (true today; if that
// changes, links will need an explicit locale marker instead of inferring it).
function localizeBlogLink(href, lang) {
  if (lang !== 'ru') return href
  return href.startsWith('/blog/') ? `/ru${href}` : href
}

function inline(t, lang) {
  // Links FIRST — their label may contain ** or * (e.g. [**Alisie**](url)).
  // The label is kept verbatim so a later bold/italic pass formats it.
  // External links open in a new tab; internal ones stay in the same tab.
  return t
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, (_m, label, href) => {
      const ext = /^https?:\/\//.test(href)
      const attrs = ext ? ' target="_blank" rel="noopener noreferrer"' : ''
      const resolvedHref = ext ? href : localizeBlogLink(href, lang)
      return `<a href="${resolvedHref}"${attrs}>${label}</a>`
    })
    .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
    .replace(/(^|[^*])\*([^*]+)\*/g, '$1<em>$2</em>')
}

function mdToHtml(md, lang) {
  const lines = md.split('\n')
  const out = []
  let para = []
  let list = []
  let listType = 'ul' // 'ul' for "- ", 'ol' for "1. "
  const flushPara = () => {
    if (para.length) {
      out.push(`<p>${inline(para.join(' ').trim(), lang)}</p>`)
      para = []
    }
  }
  const flushList = () => {
    if (list.length) {
      const items = list.map((li) => `<li>${inline(li, lang)}</li>`).join('')
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
      out.push(`<h3>${inline(t.slice(4), lang)}</h3>`)
    } else if (t.startsWith('## ')) {
      flushPara()
      flushList()
      out.push(`<h2>${inline(t.slice(3), lang)}</h2>`)
    } else if (t.startsWith('> ')) {
      flushPara()
      flushList()
      out.push(`<blockquote>${inline(t.slice(2), lang)}</blockquote>`)
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

function escapeXml(s) {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}

// ---------- figures ----------
// Articles are authored with the illustration as a dark/light <img> pair plus an
// italic caption underneath. Both images land in the DOM and CSS hides one — which
// is exactly why none of them reach Google Images: a CSS-hidden image is never
// indexed, and the visible twin competes with an identical alt.
//
// So the pair is collapsed here, at build time, into a single <figure>: one <img>,
// the dark PNG in src, the light one carried on data-light for the theme script to
// swap in. The caption becomes a <figcaption> — Google reads it to understand the
// image. Authors keep writing the pair; the SEO shape lives in one place.
//
// The default src must be the DARK png: Googlebot runs the theme script with an
// empty localStorage, which falls through to "dark". What ships in the HTML should
// match what the crawler renders.
const IMG_RE = /<img\s+src="([^"]+)"\s+class="blogImg blogImg(Dark|Light)"\s+alt="([^"]*)"\s*\/>/

function collapseFigures(html) {
  const lines = html.split('\n')
  const out = []
  for (let i = 0; i < lines.length; i++) {
    const dark = lines[i].match(IMG_RE)
    const light = lines[i + 1]?.match(IMG_RE)
    // Not a dark/light pair — pass the line through untouched.
    if (!dark || dark[2] !== 'Dark' || !light || light[2] !== 'Light') {
      out.push(lines[i])
      continue
    }
    const [, darkSrc, , alt] = dark
    const lightSrc = light[1]
    const size = pngSize(darkSrc)
    if (!size) throw new Error(`Image not found in public/: ${darkSrc}`)

    // An italic-only paragraph right after the pair is the caption.
    const capLine = lines[i + 2] ?? ''
    const cap = capLine.match(/^<p><em>(.*)<\/em><\/p>$/)
    const figcaption = cap ? `\n  <figcaption>${cap[1]}</figcaption>` : ''

    out.push(
      `<figure class="blogFigure">\n` +
        `  <img class="blogImg" src="${darkSrc}" data-light="${lightSrc}" alt="${alt}"` +
        ` width="${size.width}" height="${size.height}" loading="lazy" decoding="async" />` +
        `${figcaption}\n</figure>`
    )
    i += cap ? 2 : 1
  }
  return out.join('\n')
}

// The images a page carries, for the image-sitemap. Only what actually sits in
// src — the dark PNG — plus the article cover.
function pageImages(html, cover) {
  const imgs = [...html.matchAll(/<img class="blogImg" src="([^"]+)"[^>]*alt="([^"]*)"/g)].map(
    ([, src, alt]) => ({ src, alt })
  )
  return cover ? [{ src: cover.src, alt: cover.alt }, ...imgs] : imgs
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
  // draft: true → page still builds (so you can preview it), but it is kept OUT
  // of the sitemap until you remove the flag. Not indexed/announced to Google.
  const draft = String(data.draft).toLowerCase() === 'true'
  // The layout renders the H1 from the frontmatter title, so drop a leading
  // "# ..." in the body to avoid a duplicate H1. Author can leave it in the .md.
  const cleanBody = body.replace(/^\s*#\s+.*\n?/, '')
  const html = collapseFigures(mdToHtml(cleanBody, lang))

  // Per-article social/search cover, by convention: /blog-img/<slug>/cover-<slug>.png.
  // Falls back to the shared site banner (BaseLayout's default) when absent. The
  // cover is one image per locale — no dark/light pair: Telegram, Facebook and
  // Google render it where the site's theme toggle doesn't exist.
  const coverSrc = `/blog-img/${slug}/cover-${slug}.png`
  const coverSize = pngSize(coverSrc)
  const cover = coverSize ? { src: coverSrc, alt: data.title, ...coverSize } : null

  // Encode the article body as base64 so the raw prose is NOT readable in the
  // public repo (avoids the .astro source being scraped/indexed as duplicate
  // content). The layout decodes it AT BUILD TIME, so the deployed page ships
  // fully-rendered, indexable HTML — only the git source is obscured.
  const encodedBody = Buffer.from(html, 'utf8').toString('base64')

  // RU posts render under /ru/blog/, EN under /blog/. That extra directory level
  // changes the relative import depth to the layout. `path` stays locale-neutral
  // ("/blog/<slug>") — BaseLayout prefixes "/ru" itself for the ru canonical.
  const outDir = lang === 'ru' ? join(ROOT, 'src', 'pages', 'ru', 'blog') : OUT
  const layoutImport =
    lang === 'ru' ? '../../../layouts/BlogPostLayout.astro' : '../../layouts/BlogPostLayout.astro'

  const page = `---
// AUTO-GENERATED
// Do not edit by hand — edit the .md source and rebuild.
// body is base64-encoded on purpose; decoded at build time by BlogPostLayout.
// draft: ${draft}
import BlogPostLayout from '${layoutImport}'
---

<BlogPostLayout
  locale="${lang}"
  title="${escapeAttr(data.title)}"
  description="${escapeAttr(data.description)}"
  path="/blog/${slug}"
  pubDate={new Date('${data.pubDate}')}
${data.updatedDate ? `  updatedDate={new Date('${data.updatedDate}')}\n` : ''}${cover ? `  ogImage="${cover.src}"\n  ogImageWidth={${cover.width}}\n  ogImageHeight={${cover.height}}\n` : ''}${data.ctaTitle ? `  ctaTitle="${escapeAttr(data.ctaTitle)}"\n` : ''}${data.ctaText ? `  ctaText="${escapeAttr(data.ctaText)}"\n` : ''}  encodedBody="${encodedBody}"
/>
`

  if (!existsSync(outDir)) mkdirSync(outDir, { recursive: true })
  writeFileSync(join(outDir, `${slug}.astro`), page)
  return { slug, title: data.title, description: data.description, pubDate: data.pubDate, lang, draft }
}

// ---------- registry (metadata only, for the blog index) ----------
// Posts are read back from the generated .astro files rather than from build()'s
// return value, so that rebuilding a single post still yields the full set — and
// the sitemap keeps every other post's images instead of dropping them.
function readPostsFrom(dir) {
  if (!existsSync(dir)) return []
  return readdirSync(dir)
    .filter((f) => f.endsWith('.astro') && f !== 'index.astro')
    .map((f) => {
      const content = readFileSync(join(dir, f), 'utf8')
      const title = content.match(/title="([^"]*)"/)?.[1] ?? ''
      const description = content.match(/description="([^"]*)"/)?.[1] ?? ''
      const path = content.match(/path="([^"]*)"/)?.[1] ?? ''
      const pubDate = content.match(/pubDate=\{new Date\('([^']*)'\)\}/)?.[1] ?? ''
      const lang = content.match(/locale="([^"]*)"/)?.[1] ?? 'en'
      const draft = /\/\/ draft: true/.test(content)
      const encoded = content.match(/encodedBody="([^"]*)"/)?.[1] ?? ''
      const body = encoded ? Buffer.from(encoded, 'base64').toString('utf8') : ''
      const ogImage = content.match(/ogImage="([^"]*)"/)?.[1]
      const cover = ogImage ? { src: ogImage, alt: title } : null
      return {
        slug: path.replace('/blog/', ''),
        title,
        description,
        pubDate,
        lang,
        draft,
        images: pageImages(body, cover),
      }
    })
}

function rebuildRegistry() {
  // EN posts live in src/pages/blog/, RU posts in src/pages/ru/blog/.
  const posts = [...readPostsFrom(OUT), ...readPostsFrom(join(ROOT, 'src', 'pages', 'ru', 'blog'))]
  posts.sort((a, b) => new Date(b.pubDate) - new Date(a.pubDate))
  // Drafts don't show in the public blog index — strip the draft flag and the
  // draft posts themselves from the registry that /blog renders from. Images are
  // for the sitemap only; the index doesn't render them.
  const published = posts
    .filter((p) => !p.draft)
    .map(({ draft: _draft, images: _images, ...rest }) => rest)
  const ts = `// AUTO-GENERATED
export interface BlogPostMeta {
  slug: string
  title: string
  description: string
  pubDate: string
  lang: 'en' | 'ru'
}

export const blogPosts: BlogPostMeta[] = ${JSON.stringify(published, null, 2)}
`
  if (!existsSync(dirname(REGISTRY))) mkdirSync(dirname(REGISTRY), { recursive: true })
  writeFileSync(REGISTRY, ts)
  return posts // full set (incl. drafts) so the sitemap step can filter itself
}

// ---------- sitemap (blog URLs, between BLOG:START / BLOG:END markers) ----------
// The rest of sitemap.xml is hand-maintained; we only rewrite the block between
// the markers so manual entries (home, legal, etc.) are never touched.
function rebuildSitemap(posts) {
  if (!existsSync(SITEMAP)) return
  const xml = readFileSync(SITEMAP, 'utf8')
  // Match the markers by prefix so trivial edits to the comment text don't break it.
  const startRe = /<!--\s*BLOG:START[^>]*-->/
  const endMarker = '<!-- BLOG:END -->'
  const startMatch = xml.match(startRe)
  const e = xml.indexOf(endMarker)
  if (!startMatch || e === -1) {
    console.warn('⚠ sitemap markers not found — skipped (add BLOG:START / BLOG:END to public/sitemap.xml)')
    return
  }
  const s = startMatch.index
  const startTag = '<!-- BLOG:START (auto-generated) -->'
  // Each post: canonical loc on its own locale. No cross-locale hreflang, since a
  // post has no translated twin yet (matches the noAlternates policy in the head).
  //
  // Each <url> also lists the page's images (cover + diagrams) as <image:image>.
  // For a site with zero presence in Google Images this is the most direct way to
  // say the images exist at all. image:title reuses the alt text, which describes
  // the content with its numbers and reads like an answer to a query.
  const urls = posts
    .filter((p) => !p.draft) // drafts stay out of the sitemap until released
    .map((p) => {
      const loc = p.lang === 'ru' ? `${SITE}/ru/blog/${p.slug}` : `${SITE}/blog/${p.slug}`
      const imgs = (p.images ?? [])
        .map(
          (img) =>
            `    <image:image>\n` +
            `      <image:loc>${SITE}${img.src}</image:loc>\n` +
            `      <image:title>${escapeXml(img.alt)}</image:title>\n` +
            `    </image:image>`
        )
        .join('\n')
      return `  <url>\n    <loc>${loc}</loc>\n${imgs}${imgs ? '\n' : ''}  </url>`
    })
    .join('\n')
  // Normalize the start marker back to the canonical text so it self-heals.
  const block = `${startTag}\n${urls}${urls ? '\n' : ''}  ${endMarker}`
  const next = xml.slice(0, s) + block + xml.slice(e + endMarker.length)
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
    // Only real articles: a .md whose first non-empty line is a "---" frontmatter
    // block. This skips README, *.schema.md, notes and any other helper files the
    // pipeline drops into _drafts.
    const names = readdirSync(DRAFTS)
      .filter((f) => f.endsWith('.md'))
      .filter((f) => readFileSync(join(DRAFTS, f), 'utf8').trimStart().startsWith('---'))
      .map((f) => f.replace(/\.md$/, ''))
    names.forEach((n) => {
      const r = build(n)
      const dir = r.lang === 'ru' ? 'src/pages/ru/blog' : 'src/pages/blog'
      console.log(`✓ ${n}.md → ${dir}/${r.slug}.astro`)
    })
  } else {
    const r = build(arg)
    const dir = r.lang === 'ru' ? 'src/pages/ru/blog' : 'src/pages/blog'
    console.log(`✓ ${arg}.md → ${dir}/${r.slug}.astro`)
  }
  const posts = rebuildRegistry()
  console.log('✓ updated src/data/blogPosts.ts')
  rebuildSitemap(posts)
  console.log('✓ updated public/sitemap.xml')
} catch (e) {
  console.error('✗', e.message)
  process.exit(1)
}
