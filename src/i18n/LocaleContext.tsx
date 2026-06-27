'use client'
import { useEffect } from 'react'
import type { AnchorHTMLAttributes } from 'react'
import type { Locale } from './locale'
import { localizedPath } from './locale'
import { LocaleContext } from './useLocale'
import { useLocale } from './useLocale'

export function LocaleProvider({
    locale,
    children,
}: {
    locale: Locale
    children: React.ReactNode
}) {
    useEffect(() => {
        document.documentElement.lang = locale
    }, [locale])

    return (
        <LocaleContext.Provider value={locale}>{children}</LocaleContext.Provider>
    )
}

interface LocalizedLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
    to: string
}

// Astro serves real URLs now, so this is a plain anchor that prefixes the locale.
export function LocalizedLink({ to, ...rest }: LocalizedLinkProps) {
    const locale = useLocale()
    return <a href={localizedPath(to, locale)} {...rest} />
}
