import type { Locale } from '../../i18n/locale'

export const getData = (locale: Locale) => {
    const en = {
        title: 'Your dreams stay yours',
        subtitle: 'Alisie is built privacy-first. What you write never leaves your devices.',
        points: [
            {
                id: 'p1',
                icon: 'lock',
                title: 'Stored on your devices',
                description: 'All entries live on your own iPhone and iPad. We have no servers and no database of yours - even if iCloud went down, your dreams would still be right there on your device.',
            },
            {
                id: 'p2',
                icon: 'cloud',
                title: 'iCloud-only sync',
                description: 'Optional sync (available with Pro) moves data through your personal iCloud account - Apple’s own service, built by the maker of your device. We never touch it, and your device always keeps its own copy.',
            },
            {
                id: 'p3',
                icon: 'eye-off',
                title: 'No ads',
                description: 'Zero ad networks, zero third parties reading your entries.',
            },
            {
                id: 'p4',
                icon: 'user-x',
                title: 'No account required',
                description: 'Download and start writing. No sign-up, no email, no password to recover.',
            },
            {
                id: 'p5',
                icon: 'no-ai',
                title: 'No AI interpretations',
                wide: true,
                description: 'Only you know your own context - your characters, your places, your history. Alisie never retells your dreams in someone else’s words. Instead it turns them into structure: characters, creatures, locations and artifacts you build yourself, with statistics and patterns calculated right on your device.',
            },
        ],
    }
    if (locale === 'ru') {
        return {
            ...en,
            title: 'Ваши сны остаются вашими',
            subtitle: 'Alisie создана по принципу «приватность прежде всего». То, что вы пишете, никогда не покидает ваши устройства.',
            points: [
                {
                    id: 'p1',
                    icon: 'lock',
                    title: 'Хранятся на ваших устройствах',
                    description: 'Все записи находятся на вашем iPhone и iPad. У нас нет серверов и нет вашей базы данных - даже если iCloud вдруг откажет, ваши сны всё равно останутся прямо на вашем устройстве.',
                },
                {
                    id: 'p2',
                    icon: 'cloud',
                    title: 'Синхронизация только через iCloud',
                    description: 'Дополнительная синхронизация (доступна в Pro) передаёт данные через ваш личный аккаунт iCloud - это собственный сервис Apple, созданный производителем вашего устройства. Мы к ним не прикасаемся, а на вашем устройстве всегда хранится собственная копия.',
                },
                {
                    id: 'p3',
                    icon: 'eye-off',
                    title: 'Без рекламы',
                    description: 'Никаких рекламных сетей, никаких сторонних сервисов, читающих ваши записи.',
                },
                {
                    id: 'p4',
                    icon: 'user-x',
                    title: 'Без регистрации',
                    description: 'Скачайте и начинайте писать. Без регистрации, без email, без пароля, который нужно восстанавливать.',
                },
                {
                    id: 'p5',
                    icon: 'no-ai',
                    title: 'Без ИИ-толкований',
                    wide: true,
                    description: 'Свой контекст знаете только вы - своих персонажей, свои места, свою историю. Alisie не пересказывает ваши сны чужими словами. Вместо этого она превращает их в структуру: персонажи, существа, локации и артефакты, которые вы создаёте сами, а статистика и закономерности считаются прямо на устройстве.',
                },
            ],
        }
    }
    return en
}
