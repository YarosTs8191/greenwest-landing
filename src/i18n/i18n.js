import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en from "./locales/en.json";
import es from "./locales/es.json";
import ca from "./locales/ca.json";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: en,
    },
    es: {
      translation: es,
    },
    ca: {
      translation: ca,
    },
  },

  lng: localStorage.getItem("language") || "en",
  fallbackLng: "en",
  supportedLngs: ["en", "es", "ca"],

  interpolation: {
    escapeValue: false,
  },
});
document.documentElement.lang = i18n.language;

i18n.on("languageChanged", (language) => {
  document.documentElement.lang = language;
});

export default i18n;
