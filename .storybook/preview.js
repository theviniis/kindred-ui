import React from 'react';
import { addDecorator } from '@storybook/react';
import { darkTheme, GlobalStyle, lightTheme } from '../src/shared';
import { GlobalContext, GlobalStorage } from '../src/context';
import { ThemeProvider } from 'styled-components';

// https://storybook.js.org/docs/react/writing-stories/parameters#global-parameters
export const parameters = {
  // https://storybook.js.org/docs/react/essentials/actions#automatically-matching-args
  actions: { argTypesRegex: '^on.*' },
};

addDecorator((Story, context) => {
  const theme = React.useContext(GlobalContext);
  console.log(context);
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
