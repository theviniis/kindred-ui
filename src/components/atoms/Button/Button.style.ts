import styled, { css, useTheme } from 'styled-components';
import { getContrastingColor, SIZES } from '../../../utils';
import { getTypographyStyles } from '../Typography';
import * as T from './Button.types';

export const Button = styled.button<T.ButtonProps>`
  ${() => getTypographyStyles('label', 'lg')};
  ${({ skin, variant }) => setSkin({ skin, variant })};
  ${({ size }) => setSize(size)};
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  gap: var(--padding);
  border-style: solid;
  color: var(--clr-text);
  background-color: var(--clr-background);
  border-color: var(--clr-border);
  padding-inline: var(--padding);
  height: var(--height);
  transition: ease-in-out 100ms;
  width: ${({ fullWidth }) => fullWidth && '100%'};
  &:hover {
    color: var(--clr-text-hover);
    background-color: var(--clr-background-hover);
    border-color: var(--clr-border-hover);
  }
  &:focus {
    color: var(--clr-text-focus);
    background-color: var(--clr-background-focus);
    border-color: var(--clr-border-focus);
  }
  &:disabled {
    cursor: not-allowed;
    pointer-events: none;
    color: var(--clr-text-secondary);
    background-color: var(--clr-text-disabled);
    border-color: var(--clr-text-disabled);
  }
  ${({ theme }) => css`
    border-width: ${theme.border.width.xs};
    border-radius: ${theme.border.radius.xs};
  `};
`;

function setSkin({ skin = 'neutral', variant = 'default' }: T.SetVariantProps) {
  const { colors } = useTheme();
  let colorPrimary = colors.palette[skin][500];
  let colorHover = colors.palette[skin][600];
  let colorFocus = colors.palette[skin][700];
  const colorTextPrimary = getContrastingColor(colorPrimary);
  if (skin === 'neutral') {
    if (variant !== 'default') {
      colorPrimary = colors.text.primary;
    }
  }

  const styles = {
    default: {
      color: colorTextPrimary,
      background: colorPrimary,
      border: 'transparent',
      hover: {
        color: colorTextPrimary,
        background: colorHover,
        border: 'transparent',
      },
      focus: {
        color: colorTextPrimary,
        background: colorFocus,
        border: 'transparent',
      },
    },
    outlined: {
      color: colorPrimary,
      background: 'transparent',
      border: colorPrimary,
      hover: {
        color: colorTextPrimary,
        background: colorHover,
        border: colorHover,
      },
      focus: {
        color: colorTextPrimary,
        background: colorFocus,
        border: colorFocus,
      },
    },
    ghost: {
      color: colorPrimary,
      background: 'transparent',
      border: 'transparent',
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
    --clr-text: ${styles[variant].color};
    --clr-background: ${styles[variant].background};
    --clr-background-hover: ${styles[variant].hover.background};
    --clr-background-focus: ${styles[variant].focus.background};
    --clr-border-hover: ${styles[variant].hover.border};
    --clr-border: ${styles[variant].border};
    --clr-text-hover: ${styles[variant].hover.color};
    --clr-text-focus: ${styles[variant].focus.color};
    --clr-border-focus: ${styles[variant].focus.border};
    --clr-text-secondary: ${colors.text.secondary};
    --clr-text-disabled: ${colors.text.disabled};
  `;
}

function setSize(size: Partial<SIZES> = 'md') {
  const { spacing } = useTheme();
  const sizes = {
    sm: {
      padding: spacing.xs,
      height: spacing.lg,
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
    --padding: ${sizes[size].padding};
    --height: ${sizes[size].height};
  `;
}
