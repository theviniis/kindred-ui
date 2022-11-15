import React from 'react';
import { addDecorator } from '@storybook/react';
import { darkTheme, GlobalStyle, lightTheme } from '../src/shared';
import { themes } from '@storybook/theming';
import { GlobalContext, GlobalStorage } from '../src/context';
import { ThemeProvider } from 'styled-components';
import theme from './manager';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  docs: {
    theme,
  },
};

addDecorator((Story, context) => {
  // const theme = React.useContext(GlobalContext);
  return (
    <>
      <GlobalStorage>
        <ThemeProvider theme={lightTheme}>
          <Story {...context} />
          <GlobalStyle />
        </ThemeProvider>
      </GlobalStorage>
    </>
  );
});
