import styled, { css, FlattenSimpleInterpolation } from 'styled-components';
import { getTypographyStyles } from '../Typography';
import { ButtonProps, SetVariantProps } from './types';

const setVariant = ({
  theme,
  skin,
  variant,
  disabled,
}: SetVariantProps): FlattenSimpleInterpolation => {
  if (disabled) {
    return css`
      background-color: ${theme.colors.neutral[200]};
      border-color: ${theme.colors.neutral[200]};
      color: ${theme.colors.neutral[900]};
    `;
  }
  const colorDefault = 'DEFAULT';
  const colorHover = 400;
  const colorFocus = 500;
  const variantOptions = {
    default: {
      color: theme.colors.neutral.white,
      background: theme.colors[skin][colorDefault],
      border: theme.colors[skin][colorDefault],
      hover: {
        color: theme.colors.neutral.white,
        background: theme.colors[skin][colorHover],
        border: theme.colors[skin][colorHover],
      },
      focus: {
        color: theme.colors.neutral.white,
        background: theme.colors[skin][colorFocus],
        border: theme.colors[skin][colorFocus],
      },
    },
    stroke: {
      color: theme.colors[skin][colorDefault],
      background: 'transparent',
      border: theme.colors[skin][colorDefault],
      hover: {
        color: theme.colors[skin][colorDefault],
        background: theme.colors[skin][colorHover],
        border: theme.colors[skin][colorDefault],
      },
      focus: {
        color: theme.colors.neutral.white,
        background: theme.colors[skin][colorFocus],
        border: theme.colors[skin][colorFocus],
      },
    },
    ghost: {
      color: theme.colors[skin][colorDefault],
      background: 'transparent',
      border: 'transparent',
      hover: {
        color: theme.colors[skin][colorHover],
        background: 'transparent',
        border: 'transparent',
      },
      focus: {
        color: theme.colors[skin][colorFocus],
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
  `;
};

export const Button = styled.button<Omit<ButtonProps, 'icon' | 'children'>>`
  display: flex;
  gap: ${({ theme }) => theme.spacing.xsmall}px;
  align-items: center;
  flex-direction: ${({ iconPosition }) =>
    iconPosition === 'start' ? 'row' : 'row-reverse'};
  padding: ${({ theme }) => theme.spacing.xsmall}px
    ${({ theme }) => theme.spacing.small}px;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  border-radius: ${({ theme }) => theme.border.radius.xsmall}px;
  border-style: solid;
  border-width: ${({ theme }) => theme.border.width.xsmall}px;
  transition: ease-in-out 100ms;

  ${getTypographyStyles('subtitle2')}
  ${({ theme, skin, variant, disabled }) =>
    setVariant({ theme, skin, variant, disabled })}
`;
