import React from 'react';
import { addDecorator } from '@storybook/react';
import { lightTheme } from '../../src/shared';
import { GlobalContext } from '../../src/context';

export const ThemeProvider = (Story, context) => {
  const theme = React.useContext(GlobalContext);
  console.log(theme);

  return (
    <>
      <ThemeProvider theme={lightTheme}>
        <Story {...context} />
      </ThemeProvider>
    </>
  );
};
