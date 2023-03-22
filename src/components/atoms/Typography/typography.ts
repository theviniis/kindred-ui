import { css, useTheme } from 'styled-components';
import { theme } from '../../../shared';

export const getTypographyStyles = (
  variant: keyof typeof theme.typography.typesystem
) => {
  const { typography, colors } = useTheme();
  return css`
    font-family: ${typography.type.primary};
    font-size: ${typography.typesystem[variant].fontSize / 16}rem;
    line-height: ${typography.typesystem[variant].lineHeight}px;
    font-weight: ${typography.typesystem[variant].fontWeight};
    color: ${colors.foreground};
  `;
};
