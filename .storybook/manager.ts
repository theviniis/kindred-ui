import { addons } from '@storybook/addons';
import { create } from '@storybook/theming';
import { border, colors, palette, typography } from '../src';

const branding = {
  brandTitle: 'KindredUI',
  brandUrl: 'https://kindredui.dev',
  brandImage: '',
};

const baseTheme = {
  // UI
  appBorderRadius: border.radius.xs,
  inputBorderRadius: border.radius.xs,

  // Typography
  fontBase: typography.type.primary,
  fontCode: typography.type.secondary,

  // baseColors
  colorPrimary: colors.coreColors.primary,
  colorSecondary: colors.coreColors.secondary,
  barSelectedColor: colors.coreColors.secondary,
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
  appContentBg: palette.neutral[800],
});

addons.setConfig({
  theme: SBdarkTheme,
});

export { SBlightTheme, SBdarkTheme };
