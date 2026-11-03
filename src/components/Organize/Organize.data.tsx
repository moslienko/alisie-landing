import type { Locale } from '../../i18n/locale'

export type OrganizeItem = {
    id: 'tags' | 'categories' | 'smart' | 'filter';
    title: string;
    description: string;
    image: string;
};

type OrganizeData = {
    title: string;
    subtitle: string;
    items: OrganizeItem[];
};

export const getData = (locale: Locale): OrganizeData => {
    const en: OrganizeData = {
        title: 'Find any dream in seconds',
        subtitle: 'Search by title and description, or narrow it down with tags, categories and filters.',
        items: [
            {
                id: 'tags',
                title: 'Tags',
                description: 'Mark dreams with short labels and see which themes come back most often.',
                image: 'tags.png',
            },
            {
                id: 'categories',
                title: 'Categories',
                description: 'Group related dreams into collections with their own emoji and description.',
                image: 'category.png',
            },
            {
                id: 'smart',
                title: 'Smart categories',
                description: 'Set the rules once - matching dreams land in the category on their own.',
                image: 'smart_category.png',
            },
            {
                id: 'filter',
                title: 'Filters',
                description: 'Search by type, time of sleep, characters, tags, emotions and more.',
                image: 'filter.png',
            },
        ],
    }

    if (locale === 'ru') {
        return {
            title: 'Найдите любой сон за секунды',
            subtitle: 'Ищите по названию и описанию или сужайте выбор тегами, категориями и фильтрами.',
            items: [
                {
                    id: 'tags',
                    title: 'Теги',
                    description: 'Помечайте сны короткими метками и смотрите, какие темы повторяются чаще всего.',
                    image: 'tags.png',
                },
                {
                    id: 'categories',
                    title: 'Категории',
                    description: 'Собирайте похожие сны в подборки со своим эмодзи и описанием.',
                    image: 'category.png',
                },
                {
                    id: 'smart',
                    title: 'Умные категории',
                    description: 'Задайте правила один раз - подходящие сны попадут в категорию сами.',
                    image: 'smart_category.png',
                },
                {
                    id: 'filter',
                    title: 'Фильтры',
                    description: 'Ищите по типу и времени сна, персонажам, тегам, эмоциям и не только.',
                    image: 'filter.png',
                },
            ],
        }
    }

    return en
}
