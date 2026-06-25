'use client'
import { useLocation, useNavigate } from 'react-router-dom'
import { useLocale } from '../../i18n/useLocale'
import { localizedPath, LOCALES, type Locale } from '../../i18n/locale'

const LABELS: Record<Locale, string> = { en: 'EN', ru: 'RU' }

export default function LangSwitcher() {
    const locale = useLocale()
    const location = useLocation()
    const navigate = useNavigate()

    const switchTo = (next: Locale) => {
        if (next === locale) return
        try {
            localStorage.setItem('locale', next)
        } catch {
            void 0
        }
        navigate(localizedPath(location.pathname + location.hash, next))
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
