import React from 'react';
import { addDecorator } from '@storybook/react';
import { darkTheme, GlobalStyle, lightTheme } from '../src/shared';
import { themes } from '@storybook/theming';
import { GlobalContext, GlobalStorage } from '../src/context';
import { ThemeProvider } from 'styled-components';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  docs: {
    theme: themes.dark,
  },
};

addDecorator((Story, context) => {
  // const theme = React.useContext(GlobalContext);
  // console.log(context);
  return (
    <>
      <GlobalStorage>
        <ThemeProvider theme={darkTheme}>
          <Story {...context} />
          <GlobalStyle />
        </ThemeProvider>
      </GlobalStorage>
    </>
  );
});
