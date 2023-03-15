import styled, { css } from 'styled-components';
import { getTypographyStyles } from '../Typography';
import { ButtonProps, SetVariantProps } from './types';

export const Button = styled.button<Omit<ButtonProps, 'icon' | 'children'>>`
  display: flex;
  gap: ${({ theme }) => theme.spacing.xsm}px;
  align-items: center;
  flex-direction: row;
  padding: ${({ theme }) => theme.spacing.xsm}px
    ${({ theme }) => theme.spacing.sm}px;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  border-radius: ${({ theme }) => theme.border.radius.xsm}px;
  border-style: solid;
  border-width: ${({ theme }) => theme.border.width.xsm}px;
  transition: ease-in-out 100ms;

  ${getTypographyStyles('subtitle2')}
  ${({ theme, skin, variant, disabled }) =>
    setVariant({ theme, skin, variant, disabled })}
`;

function setVariant({ theme, skin, variant }: SetVariantProps) {
  const { colors } = theme;
  const colorDefault = 'DEFAULT';
  const colorHover = 400;
  const colorFocus = 500;
  const variantOptions = {
    default: {
      color: colors.neutral.white,
      background: colors[skin][colorDefault],
      border: colors[skin][colorDefault],
      hover: {
        color: colors.neutral.white,
        background: colors[skin][colorHover],
        border: colors[skin][colorHover],
      },
      focus: {
        color: colors.neutral.white,
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
        color: colors.neutral.white,
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
    /* &:focus, */
    &:active {
      color: ${variantOptions[variant].focus.color};
      background-color: ${variantOptions[variant].focus.background};
      border-color: ${variantOptions[variant].focus.border};
    }

    &:disabled {
      background-color: ${colors.neutral[200]};
      border-color: ${colors.neutral[200]};
      color: ${colors.neutral[900]};
    }
  `;
}
