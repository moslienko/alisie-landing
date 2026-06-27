'use client'
import Logo from '../logo/Logo'
import { getData } from './Footer.data'
import { useLocale } from '../../i18n/useLocale'
import { LocalizedLink } from '../../i18n/LocaleContext'

const isInternal = (href: string) => href.startsWith('/')
const isNewTab = (href: string) => href.startsWith('http')

export default function Footer() {
    const data = getData(useLocale())
    return (
        <footer className='footer relative mt-10 pt-12 pb-8 border-t border-[rgb(var(--fg-rgb)/0.1)]'>
            <div className='grid grid-cols-1 md:grid-cols-4 gap-10'>
                <div className='md:col-span-1'>
                    <Logo size='big' />
                    <p className='text-base text-color opacity-60 mt-4 max-w-xs'>
                        {data.tagline}
                    </p>
                </div>
                {data.columns.map((column) => (
                    <div key={column.title}>
                        <h2 className='text-sm font-bold text-color uppercase tracking-wider opacity-80'>
                            {column.title}
                        </h2>
                        <ul className='mt-4 flex flex-col gap-3'>
                            {column.links.map((link) => (
                                <li key={link.label}>
                                    {isInternal(link.href) ? (
                                        <LocalizedLink
                                            to={link.href}
                                            className='footerLink text-base text-color opacity-60'
                                        >
                                            {link.label}
                                        </LocalizedLink>
                                    ) : (
                                        <a
                                            href={link.href}
                                            className='footerLink text-base text-color opacity-60'
                                            {...(isNewTab(link.href)
                                                ? { target: '_blank', rel: 'noopener noreferrer' }
                                                : {})}
                                        >
                                            {link.label}
                                        </a>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
            <div className='mt-12 pt-6 border-t border-[rgb(var(--fg-rgb)/0.1)] text-center'>
                <p className='text-sm text-color opacity-50'>{data.copyright}</p>
            </div>
        </footer>
    );
}
