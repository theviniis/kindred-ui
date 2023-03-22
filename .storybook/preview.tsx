import React from 'react';
import { lightTheme, darkTheme } from '../src/shared';
import { ThemeProvider } from 'styled-components';
import { ViniisContext } from '../src/context';
import { SchemeWrapper, Flex } from './styles';

// export const parameters = {
//   actions: { argTypesRegex: '^on[A-Z].*' },
//   controls: {
//     matchers: {
//       color: /(background|color)$/i,
//       date: /Date$/,
//     },
//   },
//   docs: {
//     theme: storybookDarkTheme,
//   },
// };

export const globalTypes = {
  theme: {
    name: 'Theme',
    description: 'Global theme for components',
    defaultValue: 'both',
    toolbar: {
      icon: 'circlehollow',
      items: ['light', 'dark', 'both'],
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
    </ViniisContext>
  );
};

export const decorators = [withThemeProvider];
