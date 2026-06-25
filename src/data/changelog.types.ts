export interface ChangelogEntry {
    version: string
    date: string
    notes: string[]
    footer?: string
}

export type ChangelogLocale = 'en' | 'ru'
