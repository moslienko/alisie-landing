import type { Locale } from '../../i18n/locale'

export const getData = (locale: Locale) => {
    const en = {
        title: 'Free with no limits. Pro with no subscription',
        subtitle: 'A single App Store purchase. No scheduled charges, no fine print.',
        plans: [
            {
                id: 'free',
                name: 'Free',
                tagline: 'Everything you need to start journaling',
                price: '$0',
                priceNote: 'No limits, no trial, no account required',
                cta: 'Start free',
                featured: false,
                features: [
                    { text: 'Unlimited dream entries', included: true },
                    { text: 'Tags, categories & search', included: true },
                    { text: 'Characters, creatures, locations & artifacts', included: true },
                    { text: 'Basic statistics', included: true },
                    { text: 'Morning reminder notifications', included: true },
                    { text: 'Light, dark & sepia themes', included: true },
                    { text: 'Local backup & restore', included: true },
                    { text: 'iCloud sync across devices', included: false },
                    { text: 'Advanced statistics & charts', included: false },
                ],
            },
            {
                id: 'pro',
                name: 'Pro',
                tagline: 'Unlock the full dream journal',
                price: '$24.99',
                priceNote: 'One-time App Store purchase · Yours forever',
                cta: 'Unlock Pro',
                featured: true,
                badge: 'Most Popular',
                features: [
                    { text: 'Everything in Free', included: true },
                    { text: 'iCloud sync across all your devices', included: true },
                    { text: 'Advanced statistics with rich charts', included: true },
                    { text: 'Moon phase insights', included: true },
                    { text: 'Stats by tags & categories', included: true },
                    { text: 'Reality checks for lucid dreaming', included: true },
                    { text: 'Flexible export (PDF, HTML, Markdown, CSV, JSON, text, image) - all data or individual objects', included: true },
                    { text: 'Accent color & select app icons', included: true },
                    { text: 'Advanced search filters', included: true },
                ],
            },
        ],
        footnote: 'One-time purchase through the App Store. No subscriptions, no recurring fees, no hidden costs.',
        proMax: {
            title: 'Go further with Pro Max',
            subtitle: 'Standalone add-ons that extend Alisie with deeper analysis. Each one is an independent one-time purchase - pick only what you need.',
            cta: 'Get add-on',
            extensions: [
                {
                    id: 'trends',
                    name: 'Trends',
                    description: 'Analyze how your dreams change over time - emotions, nightmares, categories, tags, sleep types, participants, and analysis details.',
                    price: '$3.99',
                    icon: 'trends',
                },
                {
                    id: 'connections',
                    name: 'Dream Connections',
                    description: 'An interactive graph that reveals how characters, creatures, places, artifacts, tags and categories intertwine across your dreams.',
                    price: '$1.99',
                    icon: 'connections',
                },
            ],
            footnote: 'Add-ons are independent from Pro and from each other. One-time purchases tied to your Apple ID - no subscriptions, no recurring fees.',
        },
    }

    if (locale === 'ru') {
        return {
            ...en,
            title: 'Бесплатно без лимитов. Pro без подписки',
            subtitle: 'Разовая покупка в App Store. Ни платежей по расписанию, ни скрытых условий.',
            plans: [
                {
                    id: 'free',
                    name: 'Бесплатно',
                    tagline: 'Всё, что нужно, чтобы начать вести дневник',
                    price: '0 ₽',
                    priceNote: 'Без ограничений, без пробного периода, без аккаунта',
                    cta: 'Начать бесплатно',
                    featured: false,
                    features: [
                        { text: 'Неограниченное число записей о снах', included: true },
                        { text: 'Теги, категории и поиск', included: true },
                        { text: 'Персонажи, существа, локации и артефакты', included: true },
                        { text: 'Базовая статистика', included: true },
                        { text: 'Утренние напоминания', included: true },
                        { text: 'Светлая, тёмная темы и «Сепия»', included: true },
                        { text: 'Локальное резервное копирование и восстановление', included: true },
                        { text: 'Синхронизация через iCloud между устройствами', included: false },
                        { text: 'Расширенная статистика и графики', included: false },
                    ],
                },
                {
                    id: 'pro',
                    name: 'Pro',
                    tagline: 'Откройте полный дневник снов',
                    price: '2 290 ₽',
                    priceNote: 'Разовая покупка в App Store · Навсегда ваша',
                    cta: 'Открыть Pro',
                    featured: true,
                    badge: 'Популярный выбор',
                    features: [
                        { text: 'Всё из тарифа «Бесплатно»', included: true },
                        { text: 'Синхронизация через iCloud между всеми устройствами', included: true },
                        { text: 'Расширенная статистика с наглядными графиками', included: true },
                        { text: 'Информация о фазах луны', included: true },
                        { text: 'Статистика по тегам и категориям', included: true },
                        { text: 'Проверки реальности для осознанных сновидений', included: true },
                        { text: 'Гибкий экспорт (PDF, HTML, Markdown, CSV, JSON, текст, изображение) - все данные или отдельные объекты', included: true },
                        { text: 'Акцентный цвет и выбор иконки приложения', included: true },
                        { text: 'Расширенные фильтры поиска', included: true },
                    ],
                },
            ],
            footnote: 'Разовая покупка через App Store. Никаких подписок, регулярных платежей и скрытых расходов.',
            proMax: {
                title: 'Больше возможностей с Pro Max',
                subtitle: 'Самостоятельные дополнения, которые расширяют Alisie более глубоким анализом. Каждое - отдельная разовая покупка: берите только то, что вам нужно.',
                cta: 'Купить дополнение',
                extensions: [
                    {
                        id: 'trends',
                        name: 'Тренды',
                        description: 'Анализируйте свои сны во времени - меняются эмоции, кошмары, категории, теги, типы сна, участники и детали анализа.',
                        price: '349 ₽',
                        icon: 'trends',
                    },
                    {
                        id: 'connections',
                        name: 'Связи во снах',
                        description: 'Интерактивный граф, который показывает, как персонажи, существа, места, артефакты, теги и категории переплетаются в ваших снах.',
                        price: '199 ₽',
                        icon: 'connections',
                    },
                ],
                footnote: 'Дополнения независимы от Pro и друг от друга. Разовые покупки, привязанные к вашему Apple ID - без подписок и регулярных платежей.',
            },
        }
    }

    return en
}
