import React from 'react';
import { lightTheme } from '../shared';

export const GlobalContext = React.createContext({});

export const ViniisContext = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = React.useState(lightTheme);

  function themeToggle() {
    // const currentTheme = theme.name === 'light' ? darkTheme : lightTheme;
    // setTheme(currentTheme);
  }

  return (
    <GlobalContext.Provider value={{ theme, setTheme, themeToggle }}>
      {children}
    </GlobalContext.Provider>
  );
};
