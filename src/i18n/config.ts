import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import nsWelcomeEN_US from './en_US/welcome.json';
import nsUserLoginEN_US from './en_US/user-login.json';
import nsWelcomeJA_JP from './ja_JP/welcome.json';
import nsUserLoginJA_JP from './ja_JP/user-login.json';
import LanguageDetector from 'i18next-browser-languagedetector';

//export const defaultNS = 'nsWelcome';

export const resources = {
  en_US: {
    nsWelcome: nsWelcomeEN_US,
    nsUserLogin: nsUserLoginEN_US,
  },
  ja_JP: {
    nsWelcome: nsWelcomeJA_JP,
    nsUserLogin: nsUserLoginJA_JP,
  },
};

i18next
  .use(initReactI18next)
  //.use(LanguageDetector)
  .init({
    fallbackLng: 'en_US', // use en_US if detected lng is not available
    lng: 'en_US', // if you're using a language detector, do not define the lng option
    debug: true,
    resources,
    //defaultNS,
  });
