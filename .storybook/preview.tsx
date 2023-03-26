import React from 'react';
import { KindredContext } from '../src/context';
import { SchemeWrapper, Flex } from './styles';
import { SBdarkTheme } from './manager';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  docs: {
    theme: SBdarkTheme,
  },
};

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
  const StoryWrapper = (
    <>
      <Flex>
        <Story {...Story} {...context} />
      </Flex>
    </>
  );
  const lookup = {
    light: <KindredContext scheme="light">{StoryWrapper}</KindredContext>,
    dark: <KindredContext scheme="dark">{StoryWrapper}</KindredContext>,
    both: (
      <SchemeWrapper>
        <KindredContext scheme="light">{StoryWrapper}</KindredContext>
        <KindredContext scheme="dark">{StoryWrapper}</KindredContext>
      </SchemeWrapper>
    ),
  };
  const Component = lookup[scheme];
  return Component;
};

export const decorators = [withThemeProvider];
