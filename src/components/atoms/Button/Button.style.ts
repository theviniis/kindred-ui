import styled, { css, useTheme } from 'styled-components';
import { SIZES } from '../../../utils';
import { getTypographyStyles } from '../Typography';
import * as T from './Button.types';

export const Button = styled.button<T.ButtonProps>`
  ${() => getTypographyStyles('body', 'lg')};
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
  ${({ skin, variant }) => setVariant({ skin, variant })};
  ${({ size }) => setSize(size)};
`;

function setVariant({
  skin = 'primary',
  variant = 'default',
}: T.SetVariantProps) {
  const { colors } = useTheme();
  let clr_primary = colors[skin][100];
  let clr_hover = colors[skin][200];
  let clr_focus = colors[skin][100];
  let clr_white = colors.white;
  if (skin === 'neutral') {
    clr_primary = colors.neutral[600];
    clr_hover = colors.neutral[700];
    clr_focus = colors.neutral[600];
  }
  const variantOptions = {
    default: {
      color: clr_white,
      background: clr_primary,
      border: clr_primary,
      hover: {
        color: clr_white,
        background: clr_hover,
        border: clr_hover,
      },
      focus: {
        color: clr_white,
        background: clr_focus,
        border: clr_focus,
      },
    },
    outlined: {
      color: clr_primary,
      background: 'transparent',
      border: clr_primary,
      hover: {
        color: clr_primary,
        background: clr_hover,
        border: clr_primary,
      },
      focus: {
        color: clr_white,
        background: clr_focus,
        border: clr_focus,
      },
    },
    ghost: {
      color: clr_primary,
      background: 'transparent',
      border: 'transparent',
      hover: {
        color: clr_hover,
        background: 'transparent',
        border: 'transparent',
      },
      focus: {
        color: clr_focus,
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
      color: ${clr_white};
      background-color: ${colors.neutral[600]};
      border-color: ${colors.neutral[600]};
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
