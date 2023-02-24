import { addons } from '@storybook/addons';
import { create } from '@storybook/theming';
import { lightTheme, darkTheme } from '../src/shared';

const storybookThemeLight = create({
  // base: 'light', // this will inherit the base properties of Storybooks'light theme
  // // Base color
  // colorSecondary: lightTheme.colors.primary[100], // Chateau Green
  // // UI
  // appBg: lightTheme.colors.neutral[200],
  // appContentBg: lightTheme.colors.neutral[100],
  // appBorderColor: lightTheme.colors.neutral[300],
  // appBorderRadius: lightTheme.border.radius.xsmall,
  // // Typography
  // // fontBase: typography.type.primary,
  // // fontCode: typography.type.secondary,
  // // Text colors
  // textColor: lightTheme.colors.neutral[800],
  // textInverseColor: lightTheme.colors.neutral[100],
  // textMutedColor: lightTheme.colors.neutral[600],
  // // Toolbar default and active colors
  // barTextColor: lightTheme.colors.neutral[500],
  // barSelectedColor: lightTheme.colors.primary[100],
  // barBg: lightTheme.colors.neutral[100],
  // // Form colors
  // inputBg: lightTheme.colors.neutral[100],
  // inputBorder: lightTheme.colors.neutral[300],
  // inputTextColor: lightTheme.colors.neutral[800],
  // inputBorderRadius: lightTheme.border.radius.xsmall,
  // // Brand assets
  // brandTitle: 'Newline Storybook',
  // brandUrl: 'https://newline.co',
  // brandImage:
  //   'https://d8dgeb1f3fxgw.cloudfront.net/static/img/logo/newline/newline-logo-longwise-solo-lightbg-gray.svg',
});

const storybookThemeDark = create({
  // base: 'dark', // this will inherit the base properties of Storybooks'light theme
  // // Base color
  // colorSecondary: darkTheme.colors.primary[300], // Chateau Green
  // // UI
  // appBg: darkTheme.colors.neutral[700],
  // appContentBg: darkTheme.colors.neutral[800],
  // appBorderColor: darkTheme.colors.neutral[700],
  // appBorderRadius: darkTheme.border.radius.xsmall,
  // // Typography
  // fontBase: darkTheme.typography.type.primary,
  // fontCode: 'monospace',
  // // Text colors
  // textColor: darkTheme.colors.neutral[800],
  // textInverseColor: darkTheme.colors.neutral[100],
  // textMutedColor: darkTheme.colors.neutral[300],
  // // Toolbar default and active colors
  // barTextColor: darkTheme.colors.primary[100],
  // barSelectedColor: darkTheme.colors.primary[100],
  // barBg: darkTheme.colors.primary[100],
  // // Form colors
  // inputBg: darkTheme.colors.neutral[800],
  // inputBorder: darkTheme.colors.neutral[600],
  // inputTextColor: darkTheme.colors.neutral[800],
  // inputBorderRadius: darkTheme.border.radius.xsmall,
  // // Brand assets
  // brandTitle: 'Viniis',
  // brandUrl: 'https://viniis.dev/',
  // // brandImage:
  // //   'https://d8dgeb1f3fxgw.cloudfront.net/static/img/logo/newline/newline-logo-longwise-solo-lightbg-gray.svg',
});

addons.setConfig({
  theme: storybookThemeLight,
});

export { storybookThemeLight, storybookThemeDark };
