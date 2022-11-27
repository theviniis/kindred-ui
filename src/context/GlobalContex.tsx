import React from 'react';
import { lightTheme } from '../shared';

export const GlobalContext = React.createContext({});

export const ViniisContext = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = React.useState(lightTheme);

  return (
    <GlobalContext.Provider value={{ theme, setTheme }}>
      {children}
    </GlobalContext.Provider>
  );
};
