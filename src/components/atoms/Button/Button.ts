import * as T from './Button.types';
import styled, { css } from 'styled-components';
import { getTypographyStyles } from '../Typography';

export const Button = styled.button<T.ButtonProps>`
  box-sizing: border-box;
  cursor: pointer;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  border-style: solid;
  transition: ease-in-out 100ms;
  border-radius: ${({ theme }) => theme.border.radius.xs}px;
  border-width: ${({ theme }) => theme.border.width.xs}px;
  ${getTypographyStyles('subtitle2')};
  ${({ theme, skin, variant }) => setVariant({ theme, skin, variant })};
  ${({ theme, size }) => setSize({ size, theme })};
`;

function setVariant({
  theme,
  skin = 'primary',
  variant = 'default',
}: T.SetVariantProps) {
  const { colors } = theme;
  const colorDefault = 400;
  const colorHover = 300;
  const colorFocus = 200;
  const variantOptions = {
    default: {
      color: colors.white,
      background: colors[skin][colorDefault],
      border: colors[skin][colorDefault],
      hover: {
        color: colors.white,
        background: colors[skin][colorHover],
        border: colors[skin][colorHover],
      },
      focus: {
        color: colors.white,
        background: colors[skin][colorFocus],
        border: colors[skin][colorFocus],
      },
    },
    stroke: {
      color: colors[skin][colorDefault],
      background: 'transparent',
      border: colors[skin][colorDefault],
      hover: {
        color: colors[skin][colorDefault],
        background: colors[skin][colorHover],
        border: colors[skin][colorDefault],
      },
      focus: {
        color: colors.white,
        background: colors[skin][colorFocus],
        border: colors[skin][colorFocus],
      },
    },
    ghost: {
      color: colors[skin][colorDefault],
      background: 'transparent',
      border: 'transparent',
      hover: {
        color: colors[skin][colorHover],
        background: 'transparent',
        border: 'transparent',
      },
      focus: {
        color: colors[skin][colorFocus],
        background: 'transparent',
        border: 'transparent',
      },
    },
  };
  return css`
    color: ${variantOptions[variant].color};
    background-color: ${variantOptions[variant].background};
    border-color: ${variantOptions[variant].border};

    &:hover {
      color: ${variantOptions[variant].hover.color};
      background-color: ${variantOptions[variant].hover.background};
      border-color: ${variantOptions[variant].hover.border};
    }
    &:focus,
    &:active {
      color: ${variantOptions[variant].focus.color};
      background-color: ${variantOptions[variant].focus.background};
      border-color: ${variantOptions[variant].focus.border};
    }
    &:disabled {
      cursor: not-allowed;
      background-color: ${colors.neutral[200]};
      border-color: ${colors.neutral[200]};
      color: ${colors.neutral[900]};
    }
  `;
}

export function setSize({ size = 'md', theme }: T.SetSizeProps) {
  const { spacing } = theme;
  const styles = {
    sm: {
      padding: spacing.xs,
      height: spacing.md,
    },
    md: {
      padding: spacing.sm,
      height: spacing.xlg,
    },
    lg: {
      padding: spacing.md,
      height: spacing.xxlg,
    },
  };

  return css`
    padding-inline: ${styles[size].padding}px;
    gap: ${styles[size].padding}px;
    min-height: ${styles[size].height}px;
  `;
}
