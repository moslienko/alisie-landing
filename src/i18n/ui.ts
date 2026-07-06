import type { Locale } from "./locale";

export interface UiStrings {
  backToHome: string;
  lastUpdated: string;
  rightsReserved: (year: number) => string;
  whatsNewTitle: string;
  whatsNewIntro: string;
  latest: string;
  closeMenu: string;
  openMenu: string;
  appStoreAlt: string;
  switchToLight: string;
  switchToDark: string;
  lightTheme: string;
  darkTheme: string;
  privacyPolicyTitle: string;
  termsTitle: string;
  legalUpdatedDate: string;
  supportTitle: string;
  supportIntro: string;
  supportEmailLabel: string;
  supportEmailHint: string;
  supportTelegramHint: string;
  supportRedditHint: string;
  supportFaqLabel: string;
  supportFaqHint: string;
  metaTitle: string;
  metaDescription: string;
  blogTitle: string;
  blogIntro: string;
  blogMetaDescription: string;
  blogEmpty: string;
  blogEnBadge: string;
  backToBlog: string;
}

const en: UiStrings = {
  backToHome: "← Back to home",
  lastUpdated: "Last updated:",
  rightsReserved: (year) => `© 2019–${year} Alisie. All rights reserved.`,
  whatsNewTitle: "What's New",
  whatsNewIntro: "Every update to Alisie, newest first.",
  latest: "Latest",
  closeMenu: "Close menu",
  openMenu: "Open menu",
  appStoreAlt: "Download on the App Store",
  switchToLight: "Switch to light theme",
  switchToDark: "Switch to dark theme",
  lightTheme: "Light theme",
  darkTheme: "Dark theme",
  privacyPolicyTitle: "Privacy Policy",
  termsTitle: "Terms & Conditions",
  legalUpdatedDate: "June 24, 2026",
  supportTitle: "Support",
  supportIntro: "Need help, found a bug, or have an idea? The best place to reach us is Telegram or Reddit — there's an active community there and we check it often, so you'll usually get the fastest answer.",
  supportEmailLabel: "Email us",
  supportEmailHint: "Prefer email? You can also write to us directly.",
  supportTelegramHint: "Our Telegram channel — news and updates, with a link to our bot to message us directly. Checked often.",
  supportRedditHint: "Discuss features, tips and dream journaling with the community.",
  supportFaqLabel: "Read the FAQ",
  supportFaqHint: "Answers to the most common questions.",
  metaTitle: "Alisie - Dream Diary",
  metaDescription:
    "Alisie is a dream journal designed to help you rediscover and explore your dream world. Record your dreams in vivid detail and build a personal encyclopedia of your dream life.",
  blogTitle: "Blog",
  blogIntro: "Evidence-based writing about dreams, recall and the science of sleep.",
  blogMetaDescription:
    "Evidence-based articles about dreams, dream recall, lucid dreaming and the science of sleep.",
  blogEmpty: "No posts yet.",
  blogEnBadge: "EN",
  backToBlog: "← Back to blog",
};

const ru: UiStrings = {
  backToHome: "← На главную",
  lastUpdated: "Обновлено:",
  rightsReserved: (year) => `© 2019–${year} Alisie. Все права защищены.`,
  whatsNewTitle: "Что нового",
  whatsNewIntro: "Каждое обновление Alisie, новые - сверху.",
  latest: "Последнее",
  closeMenu: "Закрыть меню",
  openMenu: "Открыть меню",
  appStoreAlt: "Загрузите в App Store",
  switchToLight: "Переключить на светлую тему",
  switchToDark: "Переключить на тёмную тему",
  lightTheme: "Светлая тема",
  darkTheme: "Тёмная тема",
  privacyPolicyTitle: "Политика конфиденциальности",
  termsTitle: "Условия использования",
  legalUpdatedDate: "24 июня 2026",
  supportTitle: "Поддержка",
  supportIntro: "Нужна помощь, нашли ошибку или есть идея? Лучше всего написать в Telegram или на Reddit — там активное сообщество, и мы часто их проверяем, так что ответ обычно приходит быстрее всего.",
  supportEmailLabel: "Написать на почту",
  supportEmailHint: "Предпочитаете email? Можно написать нам напрямую.",
  supportTelegramHint: "Наш Telegram-канал — новости и обновления, со ссылкой на бота, чтобы написать нам напрямую. Проверяется часто.",
  supportRedditHint: "Обсуждайте функции, советы и ведение дневника снов вместе с сообществом.",
  supportFaqLabel: "Открыть FAQ",
  supportFaqHint: "Ответы на самые частые вопросы.",
  metaTitle: "Alisie - Дневник снов",
  metaDescription:
    "Alisie — это дневник снов, созданный для того, чтобы помочь вам исследовать и лучше понимать свой мир сновидений. Записывайте свои сны во всех подробностях и создавайте собственную энциклопедию сновидений.",
  blogTitle: "Блог",
  blogIntro: "Материалы о снах, запоминании сновидений и науке о сне — с опорой на исследования.",
  blogMetaDescription:
    "Статьи о снах, запоминании сновидений, осознанных снах и науке о сне — с опорой на исследования.",
  blogEmpty: "Пока нет статей.",
  blogEnBadge: "EN",
  backToBlog: "← Назад к блогу",
};

const dictionaries: Record<Locale, UiStrings> = { en, ru };

export const ui = (locale: Locale): UiStrings => dictionaries[locale];
