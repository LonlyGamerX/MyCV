import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Import translations
import enTranslation from "../lanuages/en.json";
import dkTranslation from "../lanuages/dk.json";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: enTranslation,
    },
    dk: {
      translation: dkTranslation,
    },
  },
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
