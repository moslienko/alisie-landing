'use client'
import { Navigate, useLocation } from 'react-router-dom'
import { detectLocale, type Locale } from './locale'

function preferredLocale(): Locale {
    try {
        const saved = localStorage.getItem('locale')
        if (saved === 'ru' || saved === 'en') return saved
    } catch {
        void 0
    }
    return detectLocale()
}

export default function RootRedirect({ children }: { children: React.ReactNode }) {
    const location = useLocation()
    if (location.pathname === '/' && preferredLocale() === 'ru') {
        return <Navigate to='/ru' replace />
    }
    return <>{children}</>
}
