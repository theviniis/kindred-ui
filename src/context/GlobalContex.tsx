import React, { ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle, lightTheme, themes } from '../shared';

export const GlobalContext = React.createContext({});

export interface KindredUiContextProps {
  scheme?: 'light' | 'dark';
  children?: ReactNode;
}

export const KindredUIContext = ({
  scheme = 'dark',
  children,
}: KindredUiContextProps) => {
  const [theme, setTheme] = React.useState(lightTheme);

  function themeToggle() {
    // const currentTheme = theme.name === 'light' ? darkTheme : lightTheme;
    // setTheme(currentTheme);
  }

  return (
    <GlobalContext.Provider value={{ theme, setTheme, themeToggle }}>
      <ThemeProvider theme={themes[scheme]}>
        {children}
        <GlobalStyle />
      </ThemeProvider>
    </GlobalContext.Provider>
  );
};
