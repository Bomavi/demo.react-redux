import { LOCALE } from './constants';
import { TranslationsMap } from './typings';
import en from './messages/en.json';
import ua from './messages/ua.json';

const defaultLanguage = LOCALE.en;

const translations: TranslationsMap = {
  en,
  ua,
};

export { translations, defaultLanguage };
