import type { Locale } from '../../i18n/locale'
import { APP_STORE_URL } from '../../config/appStats'

export const getData = (locale: Locale) => {
    const en = {
        tagline: 'Record your dreams. Explore your mind.',
        columns: [
            {
                title: 'Product',
                links: [
                    { label: 'Features', href: '#features' },
                    { label: 'Pricing', href: '#pricing' },
                    { label: 'FAQ', href: '#faq' },
                    { label: "What's New", href: '/whats-new' },
                ],
            },
            {
                title: 'Legal',
                links: [
                    { label: 'Privacy Policy', href: '/privacy' },
                    { label: 'Terms of Service', href: '/terms' },
                ],
            },
            {
                title: 'Support',
                links: [
                    { label: 'Help & Contact', href: '/support' },
                    { label: 'Telegram', href: 'https://t.me/alisieapp' },
                    { label: 'Reddit', href: 'https://www.reddit.com/r/alisieapp' },
                    { label: 'App Store', href: APP_STORE_URL },
                ],
            },
        ],
        copyright: `© 2019–${new Date().getFullYear()} Alisie. All rights reserved.`,
    }

    if (locale === 'ru') {
        return {
            ...en,
            tagline: 'Записывайте сны. Исследуйте свой разум.',
            columns: [
                {
                    title: 'Продукт',
                    links: [
                        { label: 'Возможности', href: '#features' },
                        { label: 'Цены', href: '#pricing' },
                        { label: 'Вопросы', href: '#faq' },
                        { label: 'Что нового', href: '/whats-new' },
                    ],
                },
                {
                    title: 'Правовое',
                    links: [
                        { label: 'Политика конфиденциальности', href: '/privacy' },
                        { label: 'Условия использования', href: '/terms' },
                    ],
                },
                {
                    title: 'Поддержка',
                    links: [
                        { label: 'Помощь и контакты', href: '/support' },
                        { label: 'Telegram', href: 'https://t.me/alisieapp' },
                        { label: 'Reddit', href: 'https://www.reddit.com/r/alisieapp' },
                        { label: 'App Store', href: APP_STORE_URL },
                    ],
                },
            ],
            copyright: `© 2019–${new Date().getFullYear()} Alisie. Все права защищены.`,
        }
    }

    return en
}
