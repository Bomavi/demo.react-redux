import { LOCALE } from './constants';
import en from './messages/en.json';
import ua from './messages/ua.json';

import type { TranslationsMap } from './typings';

const defaultLanguage = LOCALE.en;

const translations: TranslationsMap = {
  en,
  ua,
};

export { translations, defaultLanguage };
