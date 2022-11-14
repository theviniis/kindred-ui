import React, { useEffect } from 'react';
import { lightTheme, darkTheme } from '../shared';

export const GlobalContext = React.createContext({});

export const GlobalStorage = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = React.useState(lightTheme);

  function themeToggle() {
    const currentTheme = theme.name === 'light' ? darkTheme : lightTheme;
    setTheme(currentTheme);
  }

  useEffect(() => {
    const { matches } = window.matchMedia('(prefers-color-scheme: light)');
    matches ? setTheme(lightTheme) : setTheme(darkTheme);
  }, []);

  return (
    <GlobalContext.Provider value={{ theme, setTheme, themeToggle }}>
      {children}
    </GlobalContext.Provider>
  );
};
