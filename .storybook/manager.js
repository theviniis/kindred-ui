import { addons } from '@storybook/addons';
import { create } from '@storybook/theming';
import { border, colors, typography } from '../src/shared';

const themeLight = create({
  base: 'light', // this will inherit the base properties of Storybooks'light theme

  // Base color
  colorSecondary: colors.primary[100].color, // Chateau Green

  // UI
  appBg: colors.neutral[200].color,
  appContentBg: colors.neutral[100].color,
  appBorderColor: colors.neutral[300].color,
  appBorderRadius: border.radius.xsmall,

  // Typography
  fontBase: typography.type.primary,
  fontCode: typography.type.secondary,

  // Text colors
  textColor: colors.neutral[800].color,
  textInverseColor: colors.neutral[100].color,
  textMutedColor: colors.neutral[600].color,

  // Toolbar default and active colors
  barTextColor: colors.neutral[500].color,
  barSelectedColor: colors.primary[100].color,
  barBg: colors.neutral[100].color,

  // Form colors
  inputBg: colors.neutral[100].color,
  inputBorder: colors.neutral[300].color,
  inputTextColor: colors.neutral[800].color,
  inputBorderRadius: border.radius.xsmall,

  // Brand assets
  brandTitle: 'Newline Storybook',
  brandUrl: 'https://newline.co',
  brandImage:
    'https://d8dgeb1f3fxgw.cloudfront.net/static/img/logo/newline/newline-logo-longwise-solo-lightbg-gray.svg',
});

const themeDark = create({
  base: 'dark', // this will inherit the base properties of Storybooks'light theme

  // Base color
  colorSecondary: colors.primary[300].color, // Chateau Green

  // UI
  appBg: colors.neutral[700].color,
  appContentBg: colors.neutral[800].color,
  appBorderColor: colors.neutral[700].color,
  appBorderRadius: border.radius.xsmall,

  // Typography
  fontBase: typography.type.primary,
  fontCode: 'monospace',

  // Text colors
  textColor: colors.neutral[800].fontColor,
  textInverseColor: colors.neutral[100].color,
  textMutedColor: colors.neutral[300].color,

  // Toolbar default and active colors
  barTextColor: colors.primary[100].fontColor,
  barSelectedColor: colors.primary[100].fontColor,
  barBg: colors.primary[100].color,

  // Form colors
  inputBg: colors.neutral[800].color,
  inputBorder: colors.neutral[600].color,
  inputTextColor: colors.neutral[800].color,
  inputBorderRadius: border.radius.xsmall,

  // Brand assets
  brandTitle: 'Viniis',
  brandUrl: 'https://viniis.dev/',
  // brandImage:
  //   'https://d8dgeb1f3fxgw.cloudfront.net/static/img/logo/newline/newline-logo-longwise-solo-lightbg-gray.svg',
});

addons.setConfig({
  theme: themeDark,
});

export { themeLight, themeDark };
