'use client'
import { navigate } from 'astro:transitions/client'
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
        // Navigate via the View Transitions router for a smooth, flicker-free
        // language switch instead of a full page reload.
        const { pathname, hash } = window.location
        navigate(localizedPath(pathname + hash, next))
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
