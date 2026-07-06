import type { Locale } from '../../i18n/locale'
import { APP_STORE_URL } from '../../config/appStats'

export const getData = (locale: Locale) => {
  const en = {
    name: "Alisie",
    menu: [
      { title: "Why", link: "#why" },
      { title: "Features", link: "#features" },
      { title: "Pricing", link: "#pricing" },
      { title: "FAQ", link: "#faq" },
      { title: "Blog", link: "/blog" },
    ],
    links: {
      appStore: APP_STORE_URL,
    },
  }

  if (locale === 'ru') {
    return {
      ...en,
      menu: [
        { title: "Почему", link: "#why" },
        { title: "Возможности", link: "#features" },
        { title: "Цены", link: "#pricing" },
        { title: "Вопросы", link: "#faq" },
        { title: "Блог", link: "/blog" },
      ],
    }
  }

  return en
}
