import type { Locale } from '../../i18n/locale'

export const getData = (locale: Locale) => {
    const en = {
        title: 'What people write in the App Store',
        subtitle: 'Some of these journals are years deep.',
        reviews: [
            {
                id: 'rv1',
                rating: 5,
                text: 'I use the app now for 2 and a half years on a daily basis and I really recommend it. It has that very calm and simplistic feeling I deeply enjoy. It works perfectly fine, I never lost any dreams or recordings, and every update really brightens up my day.',
                author: 'jdkakxkak',
                country: 'Germany',
                date: '2024-11-01',
            },
            {
                id: 'rv2',
                rating: 5,
                text: 'I’ve been using this app for years. I have so many tags, characters, locations, and they’re so easy to navigate. There are still so many options and features for the free version, which I appreciate. This app is perfect for me and I don’t see myself switching to another app any time soon.',
                author: 'the girl with plants',
                country: 'United States',
                date: '2025-03-23',
            },
            {
                id: 'rv3',
                rating: 5,
                text: 'I’ve had so many apps for writing down my dreams — this and physical journals are the absolute best. Unlike journals, this app lets you have full analysis on these dreams, which I love. I can’t recommend it enough.',
                author: 'ETGAAD',
                country: 'Ireland',
                date: '2025-05-05',
            },
            {
                id: 'rv4',
                rating: 5,
                text: 'Best app I’ve found that I feel has a true love for helping people get in touch with their dreams.',
                author: 'chill hop fan',
                country: 'United States',
                date: '2023-02-04',
            },
            {
                id: 'rv5',
                rating: 5,
                text: 'I’ve been using this app to document my dreams since September 2020 and I recommend it. It’s easy to use and it’s even easy to transfer data to another device — I recently got a new phone, so I’d know.',
                author: 'good',
                country: 'Romania',
                date: '2022-06-26',
            },
            {
                id: 'rv6',
                rating: 5,
                text: 'Having been practicing lucid dreaming for years, I can confidently say this is by far the best journal I’ve used. The design is great and does not sacrifice function for it, which is a huge issue in all the other journals.',
                author: 'pink__pepper',
                country: 'United States',
                date: '2020-04-27',
            },
        ],
    }

    if (locale === 'ru') {
        return {
            ...en,
            title: 'Что пишут в App Store',
            subtitle: 'Некоторым из этих дневников уже по нескольку лет.',
            reviews: [
                {
                    id: 'rv1',
                    rating: 5,
                    text: 'Огромное количество полезных функций — как для записи сна, так и для анализа. Стильный интерфейс, есть тёмная тема. Много бесплатных функций. Можно действительно сделать свою энциклопедию и разобраться со снами. Нет навязчивой рекламы.',
                    author: 'julia_h_i',
                    country: 'Россия',
                    date: '2023-01-05',
                },
                {
                    id: 'rv2',
                    rating: 5,
                    text: 'Это лучшее приложение для записи снов. Мне давно не хватало чего-то подобного: не просто блокнот, но и подробный анализ, разбор персонажей и локаций.',
                    author: 'Psy.Fugue',
                    country: 'Россия',
                    date: '2020-12-03',
                },
                {
                    id: 'rv3',
                    rating: 5,
                    text: 'Прекрасное приложение с массой функций, доступных во фри-версии. Лучшее из всех, что я встречал.',
                    author: 'Кот на крыше_',
                    country: 'Россия',
                    date: '2025-06-23',
                },
                {
                    id: 'rv4',
                    rating: 5,
                    text: 'Особенно нравится, что можно записывать данные о существах, локациях, артефактах. Просто мечта.',
                    author: 'punkolia',
                    country: 'Россия',
                    date: '2023-08-15',
                },
                {
                    id: 'rv5',
                    rating: 5,
                    text: 'Искренне хочу сказать спасибо разработчикам! Это лучшее приложение для записи и анализа снов, которое я видела. Браво! Очень удобно.',
                    author: 'anutuanna11',
                    country: 'Россия',
                    date: '2023-01-12',
                },
                {
                    id: 'rv6',
                    rating: 5,
                    text: 'Пользуюсь приложением уже два с половиной года каждый день и действительно его рекомендую. В нём есть та самая спокойная простота, которая мне очень нравится. Работает безупречно, я ни разу не потерял ни одной записи.',
                    author: 'jdkakxkak',
                    country: 'Германия',
                    date: '2024-11-01',
                },
            ],
        }
    }

    return en
}
