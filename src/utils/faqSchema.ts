import type { Locale } from "../i18n/locale";
import { getData } from "../components/FAQ/FAQ.data";

export const buildFaqSchema = (locale: Locale) => {
  const { items } = getData(locale);
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
};
