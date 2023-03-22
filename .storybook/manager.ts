import { addons } from '@storybook/addons';
import { create } from '@storybook/theming';
import { darkTheme, lightTheme } from '../src';

const SBlightTheme = create({
  base: 'light',
});

const SBdarkTheme = create({
  base: 'dark',
});

addons.setConfig({
  theme: SBdarkTheme,
});

export { SBlightTheme, SBdarkTheme };
