import { useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'
import type { Locale } from './locale'
import { ui } from './ui'

const SITE_URL = 'https://alisie.app'
const YM_COUNTER_ID = 110118475

declare global {
    interface Window {
        ym?: (id: number, action: string, ...args: unknown[]) => void
    }
}

function setMeta(attr: 'name' | 'property', key: string, content: string) {
    let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`)
    if (!el) {
        el = document.createElement('meta')
        el.setAttribute(attr, key)
        document.head.appendChild(el)
    }
    el.setAttribute('content', content)
}

function setLink(rel: string, href: string) {
    let el = document.head.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`)
    if (!el) {
        el = document.createElement('link')
        el.setAttribute('rel', rel)
        document.head.appendChild(el)
    }
    el.setAttribute('href', href)
}

export function useSeo(locale: Locale) {
    const { pathname } = useLocation()
    const t = ui(locale)
    const firstRun = useRef(true)

    useEffect(() => {
        document.title = t.metaTitle
        setMeta('name', 'description', t.metaDescription)

        const canonical = `${SITE_URL}${pathname === '/' ? '/' : pathname}`
        setLink('canonical', canonical)
        setMeta('property', 'og:url', canonical)
        setMeta('property', 'og:locale', locale === 'ru' ? 'ru_RU' : 'en_US')

        if (firstRun.current) {
            firstRun.current = false
        } else {
            window.ym?.(YM_COUNTER_ID, 'hit', canonical, { title: t.metaTitle })
        }
    }, [t.metaTitle, t.metaDescription, pathname, locale])
}
