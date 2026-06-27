import type { Locale } from '../../i18n/locale'

export const getData = (locale: Locale) => {
    const en = {
        title: 'Frequently asked questions',
        subtitle: 'Everything you might want to know before you download.',
        items: [
            {
                id: 'q1',
                question: 'Is Alisie really free?',
                answer: 'Yes. Alisie is free with no entry limits - record, tag, search and review unlimited dreams forever, without a trial or account. Pro is an optional one-time purchase that unlocks iCloud sync, advanced statistics, moon phases, lucid dreaming tools and more. Never a subscription.',
            },
            {
                id: 'q-price',
                question: 'Why is Pro priced this way?',
                answer: "Most apps with this kind of depth charge a similar amount every year as a subscription. Alisie Pro is a one-time purchase - pay once and own it forever, across every future update and every new feature we add. The app has been in active development since 2019, and your Pro stays valid for as long as you use it. No matter when you bought it, we keep adding new features in regular updates at no extra cost. But some additions are simply too big to give away forever - so for those rare, ambitious ones there's the Pro Max add-on catalog, where you pick only what you want, with no subscription, ever.",
            },
            {
                id: 'q8',
                question: 'Do I need Pro Max add-ons if I buy Pro?',
                answer: 'No. Pro gives you the complete Alisie experience - unlimited entries, iCloud sync, advanced statistics, lucid dreaming tools and more. Pro Max add-ons are optional, independent one-time purchases for users who want deeper analysis. You can add them later if you find you need them - they work whether or not you own Pro.',
            },
            {
                id: 'q2',
                question: 'Where is my data stored?',
                answer: 'All dream entries live on your own iPhone and iPad. If you enable iCloud sync (a Pro feature), data moves through your personal iCloud account - we never see or store it on our servers.',
            },
            {
                id: 'q3',
                question: 'Do I need to create an account?',
                answer: 'No. Download the app and start writing immediately. No email, no password, no sign-up flow.',
            },
            {
                id: 'q4',
                question: 'Does the app work offline?',
                answer: 'Completely. Alisie is offline-first - you can log, edit, search and review entries with no internet connection. If you have iCloud sync enabled, changes sync automatically the next time you go online.',
            },
            {
                id: 'q5',
                question: 'Is there an Android version?',
                answer: 'Not yet. Alisie is built for iOS and iPadOS (13.0 and above), which lets us focus on a polished experience and deep integration with iCloud.',
            },
            {
                id: 'q6',
                question: 'What if I forget to log a dream one day?',
                answer: 'No streaks, no guilt. You can backdate entries any time, and gentle morning reminders help you build the habit without pressure.',
            },
            {
                id: 'q7',
                question: 'Can I back up and export my dreams?',
                answer: 'Yes - and backup is free for everyone. Alisie creates a full file backup you can save anywhere and restore later, so you always own your data. Pro adds flexible export in multiple formats (PDF, HTML, Markdown, CSV, text, image), for everything at once or for individual objects like characters or locations - useful for archiving on your computer or sharing outside the app.',
            },
        ],
    }

    if (locale === 'ru') {
        return {
            ...en,
            title: 'Частые вопросы',
            subtitle: 'Всё, что стоит узнать перед загрузкой.',
            items: [
                {
                    id: 'q1',
                    question: 'Alisie действительно бесплатна?',
                    answer: 'Да. Alisie бесплатна и без ограничений на количество записей - записывайте, отмечайте тегами, ищите и просматривайте сколько угодно снов навсегда, без пробного периода и аккаунта. Pro - это необязательная разовая покупка, которая открывает синхронизацию через iCloud, расширенную статистику, фазы луны, инструменты осознанных сновидений и многое другое. Никаких подписок.',
                },
                {
                    id: 'q-price',
                    question: 'Почему Pro стоит именно так?',
                    answer: 'Большинство приложений такой же глубины берут схожую сумму каждый год по подписке. Alisie Pro - это разовая покупка: заплатите один раз и владейте навсегда, включая все будущие обновления и каждую новую возможность, которую мы добавим. Приложение активно развивается с 2019 года, и ваша Pro остаётся действительной всё время, пока вы им пользуетесь. Когда бы вы её ни купили, мы продолжаем добавлять новые функции в регулярных обновлениях без доплат. Но некоторые дополнения слишком масштабны, чтобы отдавать их навсегда, - поэтому для таких редких, амбициозных функций есть каталог дополнений Pro Max, где вы выбираете только то, что хотите, и без подписки.',
                },
                {
                    id: 'q8',
                    question: 'Нужны ли дополнения Pro Max, если я купил Pro?',
                    answer: 'Нет. Pro даёт полный опыт Alisie - неограниченные записи, синхронизацию через iCloud, расширенную статистику, инструменты осознанных сновидений и многое другое. Дополнения Pro Max - это необязательные, независимые разовые покупки для тех, кто хочет более глубокого анализа. Вы можете добавить их позже, если поймёте, что они вам нужны, - они работают независимо от того, есть у вас Pro или нет.',
                },
                {
                    id: 'q2',
                    question: 'Где хранятся мои данные?',
                    answer: 'Все записи снов хранятся на вашем собственном iPhone и iPad. Если вы включите синхронизацию через iCloud (функция Pro), данные передаются через ваш личный аккаунт iCloud - мы никогда не видим их и не храним на своих серверах.',
                },
                {
                    id: 'q3',
                    question: 'Нужно ли создавать аккаунт?',
                    answer: 'Нет. Загрузите приложение и начинайте записывать сразу. Без email, без пароля, без регистрации.',
                },
                {
                    id: 'q4',
                    question: 'Работает ли приложение офлайн?',
                    answer: 'Полностью. Alisie работает прежде всего офлайн - вы можете вести записи, редактировать, искать и просматривать их без подключения к интернету. Если включена синхронизация через iCloud, изменения синхронизируются автоматически, как только вы выйдете в сеть.',
                },
                {
                    id: 'q5',
                    question: 'Есть ли версия для Android?',
                    answer: 'Пока нет. Alisie создана для iOS и iPadOS (13.0 и выше), что позволяет нам сосредоточиться на отточенном опыте и глубокой интеграции с iCloud.',
                },
                {
                    id: 'q6',
                    question: 'Что если я забуду записать сон однажды?',
                    answer: 'Никаких серий и чувства вины. Вы можете задним числом добавить запись в любой момент, а мягкие утренние напоминания помогут выработать привычку без давления.',
                },
                {
                    id: 'q7',
                    question: 'Можно ли сделать резервную копию и экспортировать сны?',
                    answer: 'Да - и резервное копирование бесплатно для всех. Alisie создаёт полную файловую резервную копию, которую вы можете сохранить где угодно и восстановить позже, так что ваши данные всегда принадлежат вам. Pro добавляет гибкий экспорт в нескольких форматах (PDF, HTML, Markdown, CSV, текст, изображение) - для всего сразу или для отдельных объектов, например персонажей или мест, - что удобно для архивирования на компьютере или для обмена за пределами приложения.',
                },
            ],
        }
    }

    return en
}
