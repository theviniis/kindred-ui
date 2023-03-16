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
  border-width: ${({ theme }) => theme.border.width.xs}px;
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
export const IconsWrapper = styled.span`
  position: relative;
  inset: 0;
  pointer-events: none;
  [icon] {
    position: absolute;
  }
  [start-icon] {
  }
  [end-icon] {
  }
`;

function setVariant({
  theme,
  variant = 'plain',
  skin = 'neutral',
}: T.SetVariantProps) {
  const { colors } = theme;
  const fontColorIntensit = 'DEFAULT';
  const hoverColorIntensit = 500;
  const focusColorIntensit = 400;

  const neutralFocusColor =
    skin === 'neutral'
      ? colors.primary[focusColorIntensit]
      : colors[skin][focusColorIntensit];

  const styles = {
    plain: {
      background: colors.neutral[200],
      border: 'transparent',
      color: colors[skin][focusColorIntensit],
      focus: neutralFocusColor,
      hover: colors[skin][hoverColorIntensit],
    },
    outlined: {
      background: 'transparent',
      color:
        skin === 'neutral'
          ? colors.neutral[500]
          : colors[skin][fontColorIntensit],
      border:
        skin === 'neutral'
          ? colors.neutral[200]
          : colors[skin][fontColorIntensit],
      focus: neutralFocusColor,
      hover: colors[skin][hoverColorIntensit],
    },
    soft: {
      background: colors[skin][700],
      color: colors[skin][fontColorIntensit],
      border: 'transparent',
      focus: neutralFocusColor,
      hover: colors[skin][hoverColorIntensit],
    },
    solid: {
      background: colors.neutral[800],
      color: colors[skin][fontColorIntensit],
      border: 'transparent',
      focus: neutralFocusColor,
      hover: colors[skin][hoverColorIntensit],
    },
  } as const;
  return css`
    background-color: ${styles[variant].background};
    border-color: ${styles[variant].border};
    &,
    &::placeholder {
      color: ${styles[variant].color};
    }
    &:hover {
      &,
      &::placeholder {
        color: ${styles[variant].hover};
      }
    }
    &:focus {
      border-color: ${styles[variant].focus};
    }
  `;
}
