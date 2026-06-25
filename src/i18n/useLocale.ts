import { createContext, useContext } from 'react'
import type { Locale } from './locale'

export const LocaleContext = createContext<Locale>('en')

export function useLocale(): Locale {
    return useContext(LocaleContext)
}
