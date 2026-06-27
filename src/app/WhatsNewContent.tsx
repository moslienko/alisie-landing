'use client'
import LegalPage from '../components/LegalPage/LegalPage'
import { getChangelog } from '../data/changelog'
import { groupChangelog } from '../data/groupChangelog'
import { LocaleProvider } from '../i18n/LocaleContext'
import type { Locale } from '../i18n/locale'
import { ui } from '../i18n/ui'

export default function WhatsNewContent({ locale }: { locale: Locale }) {
    const t = ui(locale)
    const localeTag = locale === 'ru' ? 'ru-RU' : 'en-US'

    const formatDate = (iso: string) =>
        new Date(iso).toLocaleDateString(localeTag, {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        })

    const groups = groupChangelog(getChangelog(locale))

    return (
        <LocaleProvider locale={locale}>
        <LegalPage title={t.whatsNewTitle}>
            <p className='!mb-10'>{t.whatsNewIntro}</p>

            <ol className='changelog'>
                {groups.map((group, index) => (
                    <li key={group.versionLabel} className='changelogItem'>
                        <div className='changelogDot' aria-hidden='true' />

                        <div className='flex flex-wrap items-baseline gap-x-3 gap-y-1'>
                            <span
                                className={`changelogVersion ${
                                    index === 0 ? 'changelogVersionLatest' : ''
                                }`}
                            >
                                v{group.versionLabel}
                            </span>
                            {index === 0 && (
                                <span className='changelogBadge'>{t.latest}</span>
                            )}
                            <span className='text-sm text-color opacity-50'>
                                {formatDate(group.date)}
                            </span>
                        </div>

                        <ul className='changelogNotes'>
                            {group.notes.map((note, i) => (
                                <li key={i}>{note}</li>
                            ))}
                        </ul>

                        {group.footer && (
                            <p className='changelogFooter'>{group.footer}</p>
                        )}
                    </li>
                ))}
            </ol>
        </LegalPage>
        </LocaleProvider>
    )
}
