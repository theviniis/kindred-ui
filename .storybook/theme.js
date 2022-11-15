import { create } from '@storybook/theming';
import { colors } from '../src/shared';

export default create({
  base: 'light',
  appBg: colors.neutral[100].color,
  barBg: colors.primary[100].color,
  barTextColor: colors.neutral[100].color,
  barSelectedColor: colors.neutral[100].color,
  inputBg: colors.neutral[100].color,
  brandTitle: 'Viniis',
  brandUrl: 'https://viniis.dev/',
  // brandImage: 'https://assets.catho.com.br/quantum/quantum_logo.svg',
});
