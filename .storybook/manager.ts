import { addons } from '@storybook/addons';
import { create } from '@storybook/theming';
import { border, colors, palette, themes, typography } from '../src';

const branding = {
  brandTitle: 'KindredUI',
  brandUrl: 'https://kindredui.dev',
  brandImage: '',
};

const baseTheme = {
  // UI
  appBorderRadius: parseInt(border.radius.xs, 10),
  inputBorderRadius: parseInt(border.radius.xs, 10),

  // Typography
  fontBase: typography.type.primary,
  fontCode: typography.type.secondary,

  // baseColors
  colorPrimary: colors.coreColors.pink,
  colorSecondary: colors.coreColors.blue,
  barSelectedColor: colors.coreColors.blue,
  barTextColor: colors.text.disabled,
  ...branding,
};

const SBlightTheme = create({
  ...baseTheme,
  base: 'light',
});

const SBdarkTheme = create({
  ...baseTheme,
  base: 'dark',
  appBg: palette.neutral[900],
  appContentBg: palette.neutral[900],
  textColor: themes.dark.colors.text.primary,
  barTextColor: themes.dark.colors.text.secondary,
  textInverseColor: themes.light.colors.text.primary,
  inputBg: palette.neutral[900],
  inputBorder: palette.neutral[700],
  inputTextColor: themes.dark.colors.text.primary,
});

addons.setConfig({
  theme: SBdarkTheme,
});

export { SBlightTheme, SBdarkTheme };
