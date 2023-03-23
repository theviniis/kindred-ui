import { css, useTheme } from 'styled-components';
import { theme } from '../../../shared';

export const getTypographyStyles = (variant: keyof typeof theme.typography) => {
  const { typography, colors } = useTheme();
  return css`
    font-family: ${typography[variant].fontFamily};
    font-size: ${typography[variant].fontSize / 16}rem;
    line-height: ${typography[variant].lineHeight}px;
    font-weight: ${typography[variant].fontWeight};
    letter-spacing: ${typography[variant].letterSpacing}px;
    color: ${colors.foreground};
  `;
};
