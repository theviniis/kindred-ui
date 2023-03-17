import styled, { css } from 'styled-components';
import { getTypographyStyles } from '../Typography';
import * as T from './Input.types';

export const InputWrapper = styled.div``;

export const Label = styled.label``;

export const Input = styled.input<T.StyledInputProps>`
  font: inherit;
  border: none;
  background: none;
  outline: none;
  width: 100%;
  border-style: solid;
  border-width: ${({ theme }) => theme.border.width.sm}px;
  border-radius: ${({ theme }) => theme.border.radius.xs}px;
  height: 40px;
  padding-inline: 8px;
  &,
  &::placeholder {
    ${getTypographyStyles('p1')};
  }
  ${({ theme, variant, skin }) => setVariant({ theme, variant, skin })};
`;

export const SupportingText = styled.span`
  ${getTypographyStyles('p2')};
`;
export const IconsWrapper = styled.span``;

function setVariant({
  theme,
  variant = 'plain',
  skin = 'neutral',
}: T.InputSetVariantProps) {
  const { colors } = theme;
  const colorPrimary = colors[skin].DEFAULT;
  const hoverColor = colors[skin][600];
  const borderColor =
    skin === 'neutral' ? colors.primary.DEFAULT : colorPrimary;

  const styles = {
    plain: {
      color: colorPrimary,
      background: colors.neutral[200],
      border: 'transparent',
      hover: {
        border: 'transparent',
      },
      focus: {
        border: borderColor,
      },
    },
    outlined: {
      color: colorPrimary,
      background: colors.background,
      border: colorPrimary,
      hover: {
        border: hoverColor,
      },
      focus: {
        border: colorPrimary,
      },
    },
    soft: {
      color: colorPrimary,
      background: colors[skin][300],
      border: 'transparent',
      hover: {
        border: 'transparent',
      },
      focus: {
        border: borderColor,
      },
    },
    solid: {
      color: colors[skin][900],
      background: colors[skin][500],
      border: 'transparent',
      hover: {
        border: 'transparent',
      },
      focus: {
        border: borderColor,
      },
    },
  } as const;

  return css`
    background-color: ${styles[variant].background};
    border-color: ${styles[variant].border};
    &,
    &::placeholder {
      color: ${styles[variant].color};
    }
    &:hover,
    &:hover::placeholder {
      color: ${hoverColor};
      border-color: ${styles[variant].hover.border};
    }
    &:focus {
      color: ${colorPrimary};
      border-color: ${styles[variant].focus.border};
    }
    &:not(:placeholder-shown) {
      color: ${colorPrimary};
    }
  `;
}
