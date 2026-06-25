import { getAppStats, APP_STORE_URL } from '../../config/appStats'
import type { Locale } from '../../i18n/locale'

export const getData = (locale: Locale) => {
    const en = {
        title: 'Start remembering your dreams tonight',
        subtitle: 'Download Alisie for free and turn fleeting memories into a lifelong journal.',
        ctaLabel: 'Download',
        ctaLink: APP_STORE_URL,
        microTrust: getAppStats(locale).trustPoints,
        screenshot: 'journal.png',
    }
    if (locale === 'ru') {
        return {
            ...en,
            title: 'Начните вспоминать свои сны уже сегодня',
            subtitle: 'Скачайте Alisie бесплатно и превратите ускользающие воспоминания в журнал на всю жизнь.',
            ctaLabel: 'Скачать',
        }
    }
    return en
}
