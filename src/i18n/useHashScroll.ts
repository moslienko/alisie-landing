import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export function useHashScroll() {
    const { pathname, hash } = useLocation()

    useEffect(() => {
        if (!hash) {
            window.scrollTo(0, 0)
            return
        }
        const id = decodeURIComponent(hash.slice(1))
        const raf = requestAnimationFrame(() => {
            const el = document.getElementById(id)
            if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
        })
        return () => cancelAnimationFrame(raf)
    }, [pathname, hash])
}
