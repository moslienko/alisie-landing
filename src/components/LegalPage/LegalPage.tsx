'use client'
import { useEffect } from 'react'
import Logo from '../logo/Logo'
import LangSwitcher from '../LangSwitcher/LangSwitcher'
import { LocalizedLink } from '../../i18n/LocaleContext'
import { useLocale } from '../../i18n/useLocale'
import { ui } from '../../i18n/ui'

interface LegalPageProps {
    title: string
    updated?: string
    children: React.ReactNode
}

export default function LegalPage({ title, updated, children }: LegalPageProps) {
    const t = ui(useLocale())

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div className='max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10'>
            <header className='flex items-center justify-between gap-4'>
                <LocalizedLink to='/' className='inline-flex'>
                    <Logo size='big' />
                </LocalizedLink>
                <div className='flex items-center gap-4'>
                    <LangSwitcher />
                    <LocalizedLink
                        to='/'
                        className='footerLink text-base text-color opacity-60 whitespace-nowrap'
                    >
                        {t.backToHome}
                    </LocalizedLink>
                </div>
            </header>

            <main className='mt-12'>
                <h1 className="inline-block text-4xl md:text-5xl font-bold
                    bg-gradient-to-b from-[var(--color-tint-start)] to-[var(--color-tint-end)]
                    bg-clip-text text-transparent py-2">
                    {title}
                </h1>
                {updated && (
                    <p className='text-sm text-color opacity-50 mt-1'>
                        {t.lastUpdated} {updated}
                    </p>
                )}

                <div className='legalBody mt-8 text-color opacity-80 leading-relaxed'>
                    {children}
                </div>
            </main>

            <footer className='mt-16 pt-6 border-t border-[rgb(var(--fg-rgb)/0.1)] text-center'>
                <p className='text-sm text-color opacity-50'>
                    {t.rightsReserved(new Date().getFullYear())}
                </p>
            </footer>
        </div>
    )
}
