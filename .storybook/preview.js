import React from 'react';
import { addDecorator } from '@storybook/react';
import { lightTheme, darkTheme, GlobalStyle } from '../src/shared';
import { GlobalStorage } from '../src/context';
import { ThemeProvider } from 'styled-components';
import { themeLight, themeDark } from './manager';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  docs: {
    theme: themeDark,
  },
};

export const globalTypes = {
  theme: {
    name: 'Theme',
    description: 'Global theme for components',
    defaultValue: 'light',
    toolbar: {
      icon: 'circlehollow',
      // Array of plain string values or MenuItem shape (see below)
      items: ['light', 'dark'],
      // Property that specifies if the name of the item will be displayed
      // showName: true,
      // Change title based on selected value
      dynamicTitle: true,
    },
  },
};

const getTheme = themeName => (themeName === 'light' ? lightTheme : darkTheme);

const withThemeProvider = (Story, context) => {
  const theme = getTheme(context.globals.theme);
  return (
    <GlobalStorage>
      <ThemeProvider theme={theme}>
        <Story />
        <GlobalStyle />
      </ThemeProvider>
    </GlobalStorage>
  );
};

export const decorators = [withThemeProvider];
