import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

// Navbar
import translationEN from "./locals/en/navbar.json";
import translationFR from "./locals/fr/navbar.json";
import translationES from "./locals/es/navbar.json";

// Wood Stove Data
import woodStoveEN from "./locals/en/SharedData/woodStove.json";
import woodStoveFR from "./locals/fr/SharedData/woodStove.json";
import woodStoveES from "./locals/es/SharedData/woodStove.json";

// Wood Cook
import woodCookEn from "./locals/en/SharedData/woodCook.json";
import woodCookEs from "./locals/es/SharedData/woodCook.json";
import woodCookFr from "./locals/fr/SharedData/woodCook.json";

// Wood boiler
import woodBoilerEn from "./locals/en/SharedData/woodBoiler.json";
import woodBoilerEs from "./locals/es/SharedData/woodBoiler.json";
import woodBoilerFr from "./locals/fr/SharedData/woodBoiler.json";

// Pellets
import pelletsEn from "./locals/en/SharedData/pellets.json";
import pelletsEs from "./locals/es/SharedData/pellets.json";
import pelletsFr from "./locals/fr/SharedData/pellets.json";

// Fire Wood
import fireWoodEn from "./locals/en/SharedData/fireWood.json";
import fireWoodEs from "./locals/es/SharedData/fireWood.json";
import fireWoodFr from "./locals/fr/SharedData/fireWood.json";

// About 
import othersEn from "./locals/en/others.json"
import othersEs from "./locals/es/others.json"
import othersFr from "./locals/fr/others.json"

i18n
i18n
.use(LanguageDetector)
.use(initReactI18next)
.init({
  resources: {
    en: {
      translation: translationEN,
      woodStove: woodStoveEN,
      woodCook: woodCookEn,
      woodBoiler: woodBoilerEn,
      pellets: pelletsEn,
      fireWood: fireWoodEn,
      others: othersEn
    },
    fr: {
      translation: translationFR,
      woodStove: woodStoveFR,
      woodCook: woodCookFr,
      woodBoiler: woodBoilerFr,
      pellets: pelletsFr,
      fireWood: fireWoodFr,
      others: othersFr
    },
    es: {
      translation: translationES,
      woodStove: woodStoveES,
      woodCook: woodCookEs,
      woodBoiler: woodBoilerEs,
      pellets: pelletsEs,
      fireWood: fireWoodEs,
      others: othersEs
    },
  },
  fallbackLng: "en",
  ns: ["translation", "woodStove", "woodCook", "woodBoiler", "pellets", "fireWood", "others"],
  defaultNS: "translation", // usually the navbar or shared UI stuff
  interpolation: {
    escapeValue: false,
  },
});


export default i18n;
