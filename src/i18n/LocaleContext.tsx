'use client'
import { useEffect } from 'react'
import { Link, type LinkProps } from 'react-router-dom'
import type { Locale } from './locale'
import { localizedPath } from './locale'
import { LocaleContext } from './useLocale'
import { useLocale } from './useLocale'
import { useSeo } from './useSeo'
import { useHashScroll } from './useHashScroll'

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

    useSeo(locale)

    useHashScroll()

    return (
        <LocaleContext.Provider value={locale}>{children}</LocaleContext.Provider>
    )
}

export function LocalizedLink({ to, ...rest }: LinkProps) {
    const locale = useLocale()
    const target = typeof to === 'string' ? localizedPath(to, locale) : to
    return <Link to={target} {...rest} />
}
