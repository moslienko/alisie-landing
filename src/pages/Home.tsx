import * as Component from '../components/index'

export default function Home() {
    return (
        <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
            <Component.Navbar />
            <Component.Header />
            <Component.HowItWorks />
            <Component.Features />
            <Component.Pricing />
            <Component.ProMax />
            <Component.Privacy />
            <Component.FAQ />
            <Component.FinalCTA />
            <Component.Footer />
            <Component.ThemeToggle />
        </div>
    )
}
