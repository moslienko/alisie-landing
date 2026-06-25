import type { Locale } from '../../i18n/locale'

export type FeatureItem = {
    variant: 'default' | 'mini' | 'large' | 'split';
    name: string;
    subtitle?: string;
    image?: string;
    images?: string[];
    icon?: string;
    gradient?: [string, string];
    crop?: 'top' | 'bottom';
    splitImage?: string;
};

export type ColumnEntry = FeatureItem | { stack: FeatureItem[] };

export type FeatureRow = { items: ColumnEntry[] };

type FeaturesData = {
    title: string;
    subtitle: string;
    andMore: string;
    rows: FeatureRow[];
};

export const getData = (locale: Locale): FeaturesData => {
    const en: FeaturesData = {
        title: 'Every tool your dream journal needs',
        subtitle: 'From the first entry to years of patterns - one app, no compromises.',
        andMore: 'And much more',
        rows: [
            {
                items: [
                    {
                        variant: 'split',
                        name: 'Remember Every Dream',
                        subtitle: 'Easy on the eyes, even after midnight.',
                        splitImage: 'dream.png',
                    },
                    {
                        variant: 'default',
                        name: 'Encyclopedia of your dreams',
                        subtitle: 'Reveal the vivid, unexpected details of your dreams',
                        image: 'data.png',
                        crop: 'top',
                    },
                    {
                        stack: [
                            {
                                variant: 'mini',
                                name: 'iCloud Sync',
                                subtitle: 'Full data sync across devices.',
                                icon: 'Cloud',
                                gradient: ['#38BDF8', '#2563EB'],
                            },
                            {
                                variant: 'mini',
                                name: 'Backup & Restore',
                                subtitle: 'Create backups and quickly restore, export, or import your data.',
                                icon: 'ArrowUpDown',
                                gradient: ['#A78BFA', '#6D28D9'],
                            },
                            {
                                variant: 'mini',
                                name: 'Dream Reminder',
                                subtitle: 'Reminders to log dreams in the morning.',
                                icon: 'Bell',
                                gradient: ['#FBBF24', '#F97316'],
                            },
                        ],
                    },
                ],
            },
            {
                items: [
                    {
                        variant: 'large',
                        name: 'Pro Analysis',
                        subtitle: 'Analyze dreams using charts and graphs. Also statistics available for characters, creatures, locations, artefacts, tags, targets, categories and nightmares.',
                        image: 'stats.png',
                        images: [
                            'stats.png',
                            'atmosphere.png',
                            'analytics.png',
                        ],
                    },
                ],
            },
            {
                items: [
                    {
                        stack: [
                            {
                                variant: 'mini',
                                name: 'Dream Templates',
                                subtitle: 'Save a template and log new dreams in seconds with prefilled details.',
                                icon: 'Copy',
                                gradient: ['#22D3EE', '#0E7490'],
                            },
                            {
                                variant: 'mini',
                                name: 'Targets',
                                subtitle: 'Set intentions and tasks to accomplish in your lucid dreams.',
                                icon: 'Target',
                                gradient: ['#FCD34D', '#D97706'],
                            },
                            {
                                variant: 'mini',
                                name: 'Widget Dream Signs',
                                subtitle: 'Show random dream signs right on your home or lock screen.',
                                icon: 'AppWindow',
                                gradient: ['#34D399', '#059669'],
                            },
                        ],
                    },
                    {
                        variant: 'default',
                        name: 'Reality Check',
                        subtitle: 'Form habits that support lucid dreaming',
                        image: 'reality_checker.png',
                        crop: 'top',
                    },
                    {
                        variant: 'default',
                        name: 'Trends',
                        subtitle: 'Automatic analysis of changes and patterns in your dreams',
                        image: 'trend.png',
                        crop: 'bottom',
                    },
                ],
            },
        ],
    }

    if (locale === 'ru') {
        return {
            ...en,
            title: 'Все инструменты, которые нужны вашему дневнику снов',
            subtitle: 'От первой записи до многолетних закономерностей - одно приложение, без компромиссов.',
            andMore: 'И многое другое',
            rows: [
                {
                    items: [
                        {
                            variant: 'split',
                            name: 'Запоминайте каждый сон',
                            subtitle: 'Комфортно для глаз, даже после полуночи.',
                            splitImage: 'dream.png',
                        },
                        {
                            variant: 'default',
                            name: 'Энциклопедия ваших снов',
                            subtitle: 'Раскройте яркие, неожиданные детали ваших снов',
                            image: 'data.png',
                            crop: 'top',
                        },
                        {
                            stack: [
                                {
                                    variant: 'mini',
                                    name: 'Синхронизация с iCloud',
                                    subtitle: 'Полная синхронизация данных между устройствами.',
                                    icon: 'Cloud',
                                    gradient: ['#38BDF8', '#2563EB'],
                                },
                                {
                                    variant: 'mini',
                                    name: 'Резервное копирование',
                                    subtitle: 'Создавайте резервные копии и быстро восстанавливайте, экспортируйте или импортируйте свои данные.',
                                    icon: 'ArrowUpDown',
                                    gradient: ['#A78BFA', '#6D28D9'],
                                },
                                {
                                    variant: 'mini',
                                    name: 'Напоминание о снах',
                                    subtitle: 'Напоминания записать сны утром.',
                                    icon: 'Bell',
                                    gradient: ['#FBBF24', '#F97316'],
                                },
                            ],
                        },
                    ],
                },
                {
                    items: [
                        {
                            variant: 'large',
                            name: 'Расширенный анализ',
                            subtitle: 'Анализируйте сны с помощью диаграмм и графиков. Также доступна статистика по персонажам, существам, локациям, артефактам, тегам, целям, категориям и кошмарам.',
                            image: 'stats.png',
                            images: [
                                'stats.png',
                                'atmosphere.png',
                                'analytics.png',
                            ],
                        },
                    ],
                },
                {
                    items: [
                        {
                            stack: [
                                {
                                    variant: 'mini',
                                    name: 'Шаблоны снов',
                                    subtitle: 'Сохраните шаблон и записывайте новые сны за секунды с уже заполненными деталями.',
                                    icon: 'Copy',
                                    gradient: ['#22D3EE', '#0E7490'],
                                },
                                {
                                    variant: 'mini',
                                    name: 'Цели',
                                    subtitle: 'Ставьте задачи и намерения, которые хотите осуществить в осознанных снах.',
                                    icon: 'Target',
                                    gradient: ['#FCD34D', '#D97706'],
                                },
                                {
                                    variant: 'mini',
                                    name: 'Виджет с признаками сна',
                                    subtitle: 'Показывайте случайные признаки сна прямо на главном или заблокированном экране.',
                                    icon: 'AppWindow',
                                    gradient: ['#34D399', '#059669'],
                                },
                            ],
                        },
                        {
                            variant: 'default',
                            name: 'Проверка реальности',
                            subtitle: 'Формируйте привычки, которые помогают осознанным сновидениям',
                            image: 'reality_checker.png',
                            crop: 'top',
                        },
                        {
                            variant: 'default',
                            name: 'Тренды',
                            subtitle: 'Автоматический анализ изменений и закономерностей в ваших снах',
                            image: 'trend.png',
                            crop: 'bottom',
                        },
                    ],
                },
            ],
        }
    }

    return en
}
