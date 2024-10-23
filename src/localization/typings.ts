import { LOCALE } from './constants';

export type TranslationsMap = {
  [key in LOCALE]: {
    [key: string]: string;
  };
};
