import React from 'react';
import { lightTheme, darkTheme, GlobalStyle } from '../src/shared';
import { ThemeProvider } from 'styled-components';
import { ViniisContext } from '../src/context';
import { storybookThemeLight } from './manager';
import { SchemeWrapper, Flex } from './styles';
import { Story } from '@storybook/api';

// export const parameters = {
//   actions: { argTypesRegex: '^on[A-Z].*' },
//   controls: {
//     matchers: {
//       color: /(background|color)$/i,
//       date: /Date$/,
//     },
//   },
//   docs: {
//     theme: storybookThemeLight,
//   },
// };

export const globalTypes = {
  theme: {
    name: 'Theme',
    description: 'Global theme for components',
    defaultValue: 'both',
    toolbar: {
      icon: 'circlehollow',
      // Array of plain string values or MenuItem shape (see below)
      items: ['light', 'dark', 'both'],
      // Property that specifies if the name of the item will be displayed
      // showName: true,
      // Change title based on selected value
      dynamicTitle: true,
    },
  },
};

const withThemeProvider = (Story, context) => {
  let theme = context.globals.theme as 'light' | 'dark' | 'both';

  function Content() {
    switch (theme) {
      case 'light':
        return (
          <ThemeProvider theme={lightTheme}>
            <Flex>
              <Story />
            </Flex>
          </ThemeProvider>
        );
      case 'dark':
        return (
          <ThemeProvider theme={darkTheme}>
            <Flex>
              <Story />
            </Flex>
          </ThemeProvider>
        );
      default:
        return (
          <SchemeWrapper>
            <ThemeProvider theme={lightTheme}>
              <Flex>
                <Story />
              </Flex>
            </ThemeProvider>
            <ThemeProvider theme={darkTheme}>
              <Flex>
                <Story />
              </Flex>
            </ThemeProvider>
          </SchemeWrapper>
        );
    }
  }

  return (
    <ViniisContext>
      <Content />
      <GlobalStyle />
    </ViniisContext>
  );
};

export const decorators = [withThemeProvider];
