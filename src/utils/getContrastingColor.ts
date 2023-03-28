import { useTheme } from 'styled-components';
import { themes } from '../shared';

export function getContrastingColor(background: string): string {
  const { colors } = useTheme();
  if (background === 'transparent') return colors.text.primary;
  const hex = background
    ?.replace(/\s/g, '')
    .match(/^#(?:[0-9a-fA-F]{3}){1,2}$/);
  if (!hex) {
    throw new Error('Invalid color value');
  }
  const fullHex =
    hex[0].length === 4
      ? `#${hex[0][1]}${hex[0][1]}${hex[0][2]}${hex[0][2]}${hex[0][3]}${hex[0][3]}`
      : hex[0];
  const hexValue = parseInt(fullHex.slice(1), 16);
  const r = (hexValue >> 16) & 255;
  const g = (hexValue >> 8) & 255;
  const b = hexValue & 255;
  const brightness = (r * 299 + g * 587 + b * 114) / 1000;
  const textColor =
    brightness >= 128
      ? themes.light.colors.text.primary
      : themes.dark.colors.text.primary;
  return textColor;
}
