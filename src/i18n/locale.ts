export type Locale = 'en' | 'ru'

export const LOCALES: Locale[] = ['en', 'ru']
export const DEFAULT_LOCALE: Locale = 'en'

export const PREFIXED_LOCALES: Locale[] = ['ru']

export function detectLocale(): Locale {
    if (typeof navigator === 'undefined') return DEFAULT_LOCALE
    const langs = navigator.languages?.length
        ? navigator.languages
        : [navigator.language]
    for (const lang of langs) {
        if (lang?.toLowerCase().startsWith('ru')) return 'ru'
    }
    return DEFAULT_LOCALE
}

export function localizedPath(path: string, locale: Locale): string {
    const hashIndex = path.indexOf('#')
    const hash = hashIndex >= 0 ? path.slice(hashIndex) : ''
    const pathname = hashIndex >= 0 ? path.slice(0, hashIndex) : path

    const clean = pathname.replace(/^\/ru(?=\/|$)/, '') || '/'

    if (locale === 'ru') {
        const ruPath = clean === '/' ? '/ru' : `/ru${clean}`
        return ruPath + hash
    }
    return clean + hash
}
