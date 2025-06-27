import { createContext, useContext, useState } from 'react';
import type { Dispatch, FC, PropsWithChildren, SetStateAction } from 'react';

import { IntlProvider } from 'react-intl';

import { defaultLanguage, translations } from 'src/localization';

export type LanguageState = 'en' | 'ua';

export interface LocalizationContextResult {
  language: LanguageState;
  setLanguage: Dispatch<SetStateAction<LanguageState>>;
}

export const LocalizationContext = createContext<LocalizationContextResult>({
  language: defaultLanguage,
  setLanguage: () => {
    // void
  },
});

const LocalizationProvider: FC<PropsWithChildren> = ({ children }) => {
  const [language, setLanguage] = useState<LanguageState>(defaultLanguage);

  return (
    <LocalizationContext.Provider value={{ language, setLanguage }}>
      <IntlProvider
        locale={defaultLanguage}
        messages={translations[defaultLanguage]}
      >
        {children}
      </IntlProvider>
    </LocalizationContext.Provider>
  );
};

export default LocalizationProvider;

export const useLocalization = (): LocalizationContextResult => {
  const context = useContext(LocalizationContext);

  if (!context) {
    throw new Error(
      'useLocalization must be used within a LocalizationProvider',
    );
  }

  return context;
};
