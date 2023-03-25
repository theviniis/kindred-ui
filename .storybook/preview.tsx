import React, { JSXElementConstructor } from 'react';
import { lightTheme, darkTheme, themes } from '../src/shared';
import { ThemeProvider } from 'styled-components';
import { KindredUIContext } from '../src/context';
import { SchemeWrapper, Flex } from './styles';
import { JSXElement } from '@babel/types';

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
  let scheme = context.globals.theme as 'light' | 'dark' | 'both';
  const lookup = {
    light: (
      <KindredUIContext scheme="light">
        <Flex>
          <Story {...Story} {...context} />
        </Flex>
      </KindredUIContext>
    ),
    dark: (
      <KindredUIContext scheme="dark">
        <Flex>
          <Story {...Story} {...context} />
        </Flex>
      </KindredUIContext>
    ),
    both: (
      <SchemeWrapper>
        <KindredUIContext scheme="light">
          <Flex>
            <Story {...Story} {...context} />
          </Flex>
        </KindredUIContext>
        <KindredUIContext scheme="dark">
          <Flex>
            <Story {...Story} {...context} />
          </Flex>
        </KindredUIContext>
      </SchemeWrapper>
    ),
  } as const;
  const Component = lookup[scheme];

  return <>{Component}</>;
};

export const decorators = [withThemeProvider];
