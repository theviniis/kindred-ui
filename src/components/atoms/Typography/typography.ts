import { css, useTheme } from 'styled-components';
import { theme } from '../../../shared';

export const getTypographyStyles = (
  variant: keyof typeof theme.typography.size
) => {
  const { typography, colors } = useTheme();
  return css`
    font-family: ${typography.type.primary};
    font-size: ${typography.size[variant].fontSize / 16}rem;
    line-height: ${typography.size[variant].lineHeight}px;
    font-weight: ${typography.size[variant].fontWeight};
    color: ${colors.foreground};
  `;
};
