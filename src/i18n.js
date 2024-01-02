import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import enUS from "./localizations/enUS.json";
import jaJP from "./localizations/jaJP.json";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: enUS,
      },
      jp: {
        translation: jaJP,
      },
    },
    fallbackLng: "en",
    ns: ["translation"],
    defaultNS: "translation",
    keySeparator: false, // we use content as keys
    react: {
      useSuspense: false,
    },
  });

export default i18n;
