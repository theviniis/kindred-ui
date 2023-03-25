import React, { ReactNode } from 'react';
import { DefaultTheme, ThemeProvider } from 'styled-components';
import { GlobalStyle, themes } from '../shared';

export const GlobalContext = React.createContext({});

export interface KindredUiContextProps {
  scheme?: 'light' | 'dark';
  children?: ReactNode;
  theme?: DefaultTheme;
}

export const KindredUIContext = ({
  scheme = 'dark',
  theme,
  children,
}: KindredUiContextProps) => {
  const [currentTheme, setCurrentTheme] = React.useState(theme || themes.light);

  function themeToggle() {
    const currentTheme = scheme === 'light' ? themes.light : themes.dark;
    setCurrentTheme(currentTheme);
  }

  return (
    <GlobalContext.Provider
      value={{ currentTheme, setCurrentTheme, themeToggle }}
    >
      <ThemeProvider theme={themes[scheme]}>
        {children}
        <GlobalStyle />
      </ThemeProvider>
    </GlobalContext.Provider>
  );
};
