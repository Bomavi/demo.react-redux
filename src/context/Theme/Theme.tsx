import { createContext, useContext, useEffect, useState } from 'react';
import type { Dispatch, FC, PropsWithChildren, SetStateAction } from 'react';

export type Theme = 'light' | 'dark' | 'auto';

export interface ThemeContextResult {
  theme: Theme;
  setTheme: Dispatch<SetStateAction<Theme>>;
}

export interface ThemeProviderProps {
  defaultTheme?: Theme;
}

export const DEFAULT_THEME: Theme = 'light';

const ThemeContext = createContext<ThemeContextResult>({
  theme: DEFAULT_THEME,
  setTheme: () => {
    // void
  },
});

const ThemeProvider: FC<PropsWithChildren<ThemeProviderProps>> = ({
  children,
  defaultTheme = DEFAULT_THEME,
}) => {
  const [theme, setTheme] = useState(defaultTheme);
  const [themeLoaded, setThemeLoaded] = useState(false);

  useEffect(() => {
    const themeFromStorage = window.localStorage.getItem('theme') as Theme;

    setTheme(themeFromStorage || defaultTheme);
    setThemeLoaded(true);
  }, []);

  useEffect(() => {
    if (themeLoaded) {
      window.localStorage.setItem('theme', theme);
    }
  }, [themeLoaded, theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useThemeContext = (): ThemeContextResult => {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error('useThemeContext must be used within a ThemeProvider');
  }

  return context;
};

export default ThemeProvider;
