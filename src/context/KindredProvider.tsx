import React, { ReactNode } from 'react';
import { DefaultTheme, ThemeProvider } from 'styled-components';
import { GlobalStyle, themes } from '../shared';
import { ToastProvider } from '../components/Toast';

export const GlobalContext = React.createContext({});

export interface KindredContextProps {
  scheme?: 'light' | 'dark';
  children?: ReactNode;
  theme?: DefaultTheme;
}

export const KindredContext: React.FC<KindredContextProps> = ({
  scheme = 'dark',
  theme,
  children,
}) => {
  const [currentTheme, setCurrentTheme] = React.useState(theme || themes.light);

  function themeToggle(): void {
    const currentTheme = scheme === 'light' ? themes.light : themes.dark;
    setCurrentTheme(currentTheme);
  }

  return (
    <GlobalContext.Provider
      value={{ currentTheme, setCurrentTheme, themeToggle }}
    >
      <ThemeProvider theme={themes[scheme]}>
        <ToastProvider>{children}</ToastProvider>
        <GlobalStyle />
      </ThemeProvider>
    </GlobalContext.Provider>
  );
};
