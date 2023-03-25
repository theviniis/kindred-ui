import styled, { css, useTheme } from 'styled-components';
import { SIZES } from '../../../utils';
import { getTypographyStyles } from '../Typography';
import * as T from './Button.types';

export const Button = styled.button<T.ButtonProps>`
  ${() => getTypographyStyles('label', 'lg')};
  border: none;
  background: none;
  box-sizing: border-box;
  cursor: pointer;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  transition: ease-in-out 100ms;
  ${({ skin, variant }) => setSkin({ skin, variant })};
  ${({ size }) => setSize(size)};
`;

function setSkin({ skin = 'neutral', variant = 'default' }: T.SetVariantProps) {
  const { colors, border } = useTheme();
  let colorPrimary = colors.coreColors[skin];
  if (skin === 'neutral' && variant === 'ghost') {
    colorPrimary = colors.text.primary;
  }
  const colorHover = colors.palette[skin][200];
  const colorFocus = colors.palette[skin][400];
  const textColor = colors.white;
  const styles = {
    default: {
      color: textColor,
      background: colorPrimary,
      borderColor: 'transparent',
      hover: {
        color: textColor,
        background: colorHover,
        border: 'transparent',
      },
      focus: {
        color: textColor,
        background: colorFocus,
        border: 'transparent',
      },
    },
    outlined: {
      color: colorPrimary,
      background: 'transparent',
      borderColor: colorPrimary,
      hover: {
        color: textColor,
        background: colorHover,
        border: colorPrimary,
      },
      focus: {
        color: textColor,
        background: colorFocus,
        border: colorFocus,
      },
    },
    ghost: {
      color: colorPrimary,
      background: 'transparent',
      borderColor: 'transparent',
      hover: {
        color: colorHover,
        background: 'transparent',
        border: 'transparent',
      },
      focus: {
        color: colorFocus,
        background: 'transparent',
        border: 'transparent',
      },
    },
  };

  return css`
    border-style: solid;
    border-width: ${border.width.xs}px;
    border-radius: ${border.radius.xs}px;
    border-color: ${styles[variant].borderColor};
    background-color: ${styles[variant].background};
    color: ${styles[variant].color};
    &:hover {
      background-color: ${styles[variant].hover.background};
      border-color: ${styles[variant].hover.border};
      color: ${styles[variant].hover.color};
    }
    &:focus {
      background-color: ${styles[variant].focus.background};
      border-color: ${styles[variant].focus.border};
      color: ${styles[variant].focus.color};
    }
  `;
}

function setSize(size: Partial<SIZES> = 'md') {
  const { spacing } = useTheme();
  const styles = {
    sm: {
      padding: spacing.xs,
      height: spacing.md,
    },
    md: {
      padding: spacing.sm,
      height: spacing.lg,
    },
    lg: {
      padding: spacing.md,
      height: spacing.xlg,
    },
  };
  return css`
    padding-inline: ${styles[size].padding}px;
    gap: ${styles[size].padding}px;
    height: ${styles[size].height}px;
  `;
}
