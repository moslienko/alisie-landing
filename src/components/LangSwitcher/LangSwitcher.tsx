'use client'
import { useLocale } from '../../i18n/useLocale'
import { localizedPath, LOCALES, type Locale } from '../../i18n/locale'

const LABELS: Record<Locale, string> = { en: 'EN', ru: 'RU' }

export default function LangSwitcher({ locale: localeProp }: { locale?: Locale } = {}) {
    const ctxLocale = useLocale()
    const locale = localeProp ?? ctxLocale

    const switchTo = (next: Locale) => {
        if (next === locale) return
        try {
            localStorage.setItem('locale', next)
        } catch {
            void 0
        }
        // Real URLs now: navigate to the same page in the other locale.
        const { pathname, hash } = window.location
        window.location.href = localizedPath(pathname + hash, next)
    }

    return (
        <div className='langSwitcher' role='group' aria-label='Language'>
            {LOCALES.map((l) => (
                <button
                    key={l}
                    type='button'
                    onClick={() => switchTo(l)}
                    aria-pressed={l === locale}
                    className={`langSwitcherBtn ${l === locale ? 'langSwitcherActive' : ''}`}
                >
                    {LABELS[l]}
                </button>
            ))}
        </div>
    )
}
