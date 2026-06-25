import type { Locale } from '../../i18n/locale'

export const getData = (locale: Locale) => {
    const en = {
        title: 'Why journal your dreams?',
        subtitle: 'A few minutes a day turn fleeting memories into something you can learn from, return to, and share with your future self.',
        reasons: [
            {
                id: 'r1',
                icon: 'memory',
                title: 'Remember more dreams',
                description: 'Regularly writing down what you recall trains your mind to hold onto dreams instead of losing them within minutes of waking.',
            },
            {
                id: 'r2',
                icon: 'patterns',
                title: 'Spot recurring patterns',
                description: 'Over time you start noticing the same places, people and emotions returning. Those patterns say something about what your mind is working through.',
            },
            {
                id: 'r3',
                icon: 'lucid',
                title: 'Practice lucid dreaming',
                description: 'Dream journaling is the first step toward lucid dreams. Collect dream signs, build awareness, and eventually recognize when you are dreaming.',
            },
            {
                id: 'r4',
                icon: 'archive',
                title: 'Build a personal archive',
                description: 'Your dreams are yours. Keep them in one place you can revisit years later - a private library of everything your mind created while you slept.',
            },
        ],
    }
    if (locale === 'ru') {
        return {
            ...en,
            title: 'Зачем вести дневник снов?',
            subtitle: 'Несколько минут в день превращают мимолётные воспоминания в то, из чего можно извлечь уроки, к чему можно вернуться и чем можно поделиться с собой в будущем.',
            reasons: [
                {
                    id: 'r1',
                    icon: 'memory',
                    title: 'Запоминайте больше снов',
                    description: 'Регулярно записывая то, что удалось вспомнить, вы тренируете память удерживать сны, а не терять их в первые же минуты после пробуждения.',
                },
                {
                    id: 'r2',
                    icon: 'patterns',
                    title: 'Замечайте повторяющиеся образы',
                    description: 'Со временем вы начинаете замечать, как возвращаются одни и те же места, люди и эмоции. Эти образы говорят о том, над чем работает ваш разум.',
                },
                {
                    id: 'r3',
                    icon: 'lucid',
                    title: 'Практикуйте осознанные сны',
                    description: 'Дневник снов - первый шаг к осознанным сновидениям. Собирайте признаки сна, развивайте внимательность и со временем научитесь понимать, когда вы спите.',
                },
                {
                    id: 'r4',
                    icon: 'archive',
                    title: 'Создавайте личный архив',
                    description: 'Ваши сны принадлежат только вам. Храните их в одном месте, к которому можно вернуться спустя годы, - личная библиотека всего, что создал ваш разум во сне.',
                },
            ],
        }
    }
    return en
}
