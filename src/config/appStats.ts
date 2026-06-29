import type { Locale } from "../i18n/locale";

export const appStats = {
  launchYear: 2019,

  rating: "4.8",

  privacyLabel: "100%",
};

export const APP_STORE_URL =
  "https://apps.apple.com/app/id1485091289?ct=website&mt=8";

interface LocalizedAppStats {
  privacyDescription: string;
  trustPoints: string[];
}

const localized: Record<Locale, LocalizedAppStats> = {
  en: {
    privacyDescription: "Private & offline-first",
    trustPoints: ["Free forever", "No ads", "Offline-first", "iOS 13+"],
  },
  ru: {
    privacyDescription: "Приватно и работает офлайн",
    trustPoints: [
      "Бесплатно навсегда",
      "Без рекламы",
      "Работает без интернета",
      "iOS 13+",
    ],
  },
};

export const getAppStats = (locale: Locale): LocalizedAppStats =>
  localized[locale];
