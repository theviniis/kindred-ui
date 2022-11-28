import styled, { css, FlattenSimpleInterpolation } from 'styled-components';
import { border, spacing } from '../../shared';
import { SetVariantProps, StyledButtonProps } from './types';
import { Typography } from '../';

const setVariant = ({
  theme,
  skin,
  variant,
  disabled,
}: SetVariantProps): FlattenSimpleInterpolation => {
  const colorDefault = 100;
  const colorHover = 500;
  const colorFocus = 600;

  const variantOptions = {
    default: {
      color: theme[skin][colorDefault].fontColor,
      background: theme[skin][colorDefault].color,
      border: theme[skin][colorDefault].color,
      hover: {
        color: theme[skin][colorHover].fontColor,
        background: theme[skin][colorHover].color,
        border: theme[skin][colorHover].color,
      },
      focus: {
        color: theme[skin][colorFocus].fontColor,
        background: theme[skin][colorFocus].color,
        border: theme[skin][colorFocus].color,
      },
      disabled: {
        color: theme.neutral[200].fontColor,
        background: theme.neutral[200].color,
        border: theme.neutral[200].color,
      },
    },
    stroke: {
      color: theme[skin][colorDefault].color,
      background: 'transparent',
      border: theme[skin][colorDefault].color,
      hover: {
        color: theme[skin][colorHover].fontColor,
        background: theme[skin][colorHover].color,
        border: theme[skin][colorHover].color,
      },
      focus: {
        color: theme[skin][colorFocus].fontColor,
        background: theme[skin][colorFocus].color,
        border: theme[skin][colorFocus].color,
      },
      disabled: {
        color: theme.neutral[200].color,
        background: 'transparent',
        border: theme.neutral[200].color,
      },
    },
    ghost: {
      color: theme[skin][colorDefault].color,
      background: 'transparent',
      border: 'transparent',
      hover: {
        color: theme[skin][colorHover].color,
        background: 'transparent',
        border: 'transparent',
      },
      focus: {
        color: theme[skin][colorFocus].color,
        background: 'transparent',
        border: 'transparent',
      },
      disabled: {
        color: theme.neutral[200].color,
        background: 'transparent',
        border: 'transparent',
      },
    },
  } as const;

  if (disabled) {
    return css`
      color: ${variantOptions[variant].disabled.color};
      background-color: ${variantOptions[variant].disabled.background};
      border-color: ${variantOptions[variant].disabled.border};
    `;
  }

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

export const Button = styled(Typography)<StyledButtonProps>`
  display: flex;
  gap: ${spacing.xsmall}px;
  align-items: center;
  justify-content: center;
  flex-direction: ${({ iconPosition }) =>
    iconPosition === 'start' ? 'row' : 'row-reverse'};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  border-radius: ${border.radius.xsmall}px;
  border-style: solid;
  border-width: ${border.width.xsmall}px;
  padding: ${({ size }) => `${size / 2}px ${size}px`};

  ${({ fullWidth }) => (fullWidth ? 'width: 100%' : '')};

  ${({ theme, skin, variant, disabled }) =>
    setVariant({ theme, skin, variant, disabled })};
`;
