import type { ComponentType } from 'react'
import { LocaleProvider } from '../../i18n/LocaleContext'
import type { Locale } from '../../i18n/locale'

export const withLocale = (Section: ComponentType) =>
    function LocalizedSection({ locale }: { locale: Locale }) {
        return (
            <LocaleProvider locale={locale}>
                <Section />
            </LocaleProvider>
        )
    }
