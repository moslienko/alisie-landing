import { LocaleProvider } from '../i18n/LocaleContext'
import type { Locale } from '../i18n/locale'
import * as Component from '../components/index'

export default function HomePage({ locale }: { locale: Locale }) {
    return (
        <LocaleProvider locale={locale}>
            <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
                <Component.Navbar />
                <main>
                    <Component.Header />
                    <Component.HowItWorks />
                    <Component.Features />
                    <Component.Pricing />
                    <Component.ProMax />
                    <Component.Privacy />
                    <Component.FAQ />
                    <Component.FinalCTA />
                </main>
                <Component.Footer />
                <Component.ThemeToggle />
            </div>
        </LocaleProvider>
    )
}
