import { getAppStats, APP_STORE_URL, appStats } from '../../config/appStats'
import type { Locale } from '../../i18n/locale'

export const getData = (locale: Locale) => {
    const stats = getAppStats(locale)
    const en = {
        name: 'Alisie',
        subtitle: 'Record your dreams.\nExplore your mind.',
        caption: 'Private, unlimited and yours forever. A dream journal for iPhone and iPad.',
        ctaLabel: 'Download',
        ctaLink: APP_STORE_URL,
        rating: null as string | null,
        sinceLabel: `Making dreamers happy since ${appStats.launchYear}`,
        trust: stats.trustPoints,
        icon: '/app_icon_192.png',
        screenshot: 'journal.png',
    }
    if (locale === 'ru') {
        return {
            ...en,
            subtitle: 'Записывайте свои сны.\nИсследуйте свой разум.',
            caption: 'Приватный, безлимитный и ваш навсегда. Дневник снов для iPhone и iPad.',
            ctaLabel: 'Скачать',
            rating: appStats.rating,
            sinceLabel: `Радуем сновидцев с ${appStats.launchYear} года`,
            trust: stats.trustPoints,
        }
    }
    return en
}
