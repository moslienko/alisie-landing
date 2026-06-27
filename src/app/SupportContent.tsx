'use client'
import PageBody from '../components/PageBody/PageBody'
import { LocalizedLink, LocaleProvider } from '../i18n/LocaleContext'
import type { Locale } from '../i18n/locale'
import { ui } from '../i18n/ui'

const CONTACT_EMAIL = 'alisieapp@proton.me'
const TELEGRAM_URL = 'https://t.me/alisieapp'
const REDDIT_URL = 'https://www.reddit.com/r/alisieapp'

const icons = {
    telegram: (
        <svg viewBox='0 0 24 24' fill='currentColor' className='w-6 h-6'>
            <path d='M21.94 4.4 18.9 19.1c-.23 1-.83 1.25-1.68.78l-4.64-3.42-2.24 2.16c-.25.25-.46.46-.94.46l.33-4.73 8.6-7.77c.37-.33-.08-.52-.58-.18L7.43 13.2l-4.57-1.43c-1-.31-1.01-1 .21-1.48l17.86-6.88c.83-.31 1.55.19 1.28 1.39z' />
        </svg>
    ),
    reddit: (
        <svg viewBox='0 0 24 24' fill='currentColor' className='w-6 h-6'>
            <path d='M22 12.06c0-1.2-.98-2.18-2.18-2.18-.58 0-1.1.23-1.5.6-1.46-1-3.43-1.65-5.6-1.73l1.15-3.6 3.13.73a1.56 1.56 0 1 0 .18-.86l-3.48-.81a.4.4 0 0 0-.48.28l-1.27 4a10.7 10.7 0 0 0-5.7 1.73 2.17 2.17 0 0 0-1.5-.6A2.18 2.18 0 0 0 2 12.06c0 .8.43 1.5 1.07 1.88a3.9 3.9 0 0 0-.05.62c0 3.18 3.7 5.76 8.27 5.76s8.27-2.58 8.27-5.76c0-.2-.02-.41-.05-.61.65-.38 1.1-1.08 1.1-1.89zM7.5 13.6a1.56 1.56 0 1 1 3.12 0 1.56 1.56 0 0 1-3.12 0zm8.6 3.93c-1.07 1.07-3.13 1.15-3.73 1.15s-2.66-.08-3.73-1.15a.4.4 0 0 1 .57-.57c.67.67 2.1.91 3.16.91s2.49-.24 3.16-.91a.4.4 0 0 1 .57.57zm-.27-2.37a1.56 1.56 0 1 1 0-3.12 1.56 1.56 0 0 1 0 3.12z' />
        </svg>
    ),
    mail: (
        <svg viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' className='w-6 h-6'>
            <rect x='2' y='4' width='20' height='16' rx='2' />
            <path d='m22 7-10 5L2 7' />
        </svg>
    ),
    help: (
        <svg viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' className='w-6 h-6'>
            <circle cx='12' cy='12' r='10' />
            <path d='M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3' />
            <line x1='12' y1='17' x2='12.01' y2='17' />
        </svg>
    ),
}

export default function SupportContent({ locale }: { locale: Locale }) {
    const t = ui(locale)

    return (
        <LocaleProvider locale={locale}>
        <PageBody title={t.supportTitle}>
            <p className='!mb-8'>{t.supportIntro}</p>

            <div className='not-prose grid grid-cols-1 sm:grid-cols-2 gap-4'>
                <SupportCard
                    href={TELEGRAM_URL}
                    external
                    icon={icons.telegram}
                    label='Telegram'
                    hint={t.supportTelegramHint}
                    primary
                />
                <SupportCard
                    href={REDDIT_URL}
                    external
                    icon={icons.reddit}
                    label='Reddit'
                    hint={t.supportRedditHint}
                    primary
                />
                <SupportCard
                    href={`mailto:${CONTACT_EMAIL}`}
                    external
                    icon={icons.mail}
                    label={t.supportEmailLabel}
                    hint={t.supportEmailHint}
                />
                <SupportCard
                    to='/#faq'
                    icon={icons.help}
                    label={t.supportFaqLabel}
                    hint={t.supportFaqHint}
                />
            </div>
        </PageBody>
        </LocaleProvider>
    )
}

interface SupportCardProps {
    icon: React.ReactNode
    label: string
    hint: string
    href?: string
    to?: string
    external?: boolean
    primary?: boolean
}

function SupportCard({ icon, label, hint, href, to, external, primary }: SupportCardProps) {
    const className = `supportCard ${primary ? 'supportCardPrimary' : ''} group flex items-start gap-4 p-5 rounded-2xl`
    const inner = (
        <>
            <span className='supportCardIcon flex-shrink-0 flex items-center justify-center w-11 h-11 rounded-xl'>
                {icon}
            </span>
            <span className='min-w-0'>
                <span className='block text-lg font-semibold text-color'>{label}</span>
                <span className='block text-sm text-color opacity-60 mt-0.5'>{hint}</span>
            </span>
        </>
    )

    if (to) {
        return (
            <LocalizedLink to={to} className={className}>
                {inner}
            </LocalizedLink>
        )
    }
    return (
        <a
            href={href}
            className={className}
            {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
        >
            {inner}
        </a>
    )
}
