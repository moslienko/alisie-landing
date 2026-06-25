import type { ChangelogEntry } from './changelog.types'
import type { Locale } from '../i18n/locale'
import { changelogEn } from './changelog.en'
import { changelogRu } from './changelog.ru'

const byLocale: Record<Locale, ChangelogEntry[]> = {
    en: changelogEn,
    ru: changelogRu,
}

export const getChangelog = (locale: Locale): ChangelogEntry[] => byLocale[locale]

export type { ChangelogEntry } from './changelog.types'
