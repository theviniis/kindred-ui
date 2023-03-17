import styled, { css } from 'styled-components';
import { setSize, getTypographyStyles } from '../../';
import * as T from './Input.types';

export const InputWrapper = styled.div`
  ${getTypographyStyles('p1')};
`;

export const Label = styled.label`
  font: inherit;
  display: inline-block;
  margin-block-end: ${({ theme }) => theme.spacing.xxs}px;
  color: ${({ theme }) => theme.colors.foreground};
`;

export const Input = styled.input<T.StyledInputProps>`
  font: inherit;
  border: none;
  background: none;
  outline: none;
  overflow: hidden;
  width: 100%;
  border-style: solid;
  border-width: ${({ theme }) => theme.border.width.sm}px;
  border-radius: ${({ theme }) => theme.border.radius.xs}px;
  min-height: 40px;
  padding-inline: 8px;
  transition: border-color ease-in 150ms;
  ${({ theme, variant, skin }) => setVariant({ theme, variant, skin })};
  /* ${({ theme, inputSize }) => setSize({ size: inputSize, theme })}; */
`;

export const SupportingText = styled.span`
  ${getTypographyStyles('p2')};
  color: ${({ theme }) => theme.colors.neutral[400]};
  margin-block-start: ${({ theme }) => theme.spacing.xxs}px;
`;

export const IconsWrapper = styled.span``;

function setVariant({
  theme,
  variant = 'plain',
  skin = 'neutral',
}: T.InputSetVariantProps) {
  const { colors } = theme;

  let primaryColor = colors[skin][400];
  let fontColor = colors[skin][400];
  let hoverColor = colors[skin][300];
  let borderColor = primaryColor;

  if (skin === 'neutral') {
    primaryColor = colors[skin][700];
    hoverColor = colors[skin][800];
    fontColor = colors[skin][700];
    borderColor = colors.primary[400];
  }

  const styles = {
    plain: {
      color: fontColor,
      background: colors.neutral[200],
      border: 'transparent',
      hover: {
        border: 'transparent',
      },
      focus: {
        color: colors.neutral[700],
        border: borderColor,
      },
    },
    outlined: {
      color: fontColor,
      background: colors.background,
      border: primaryColor,
      hover: {
        border: hoverColor,
      },
      focus: {
        border: primaryColor,
      },
    },
    soft: {
      color: colors[skin][200],
      background: colors[skin][500],
      border: 'transparent',
      hover: {
        border: 'transparent',
      },
      focus: {
        border: borderColor,
      },
    },
    solid: {
      color: colors[skin][200],
      background: colors[skin][400],
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
      color: ${primaryColor};
      border-color: ${styles[variant].focus.border};
    }
    &:not(:placeholder-shown) {
      color: ${primaryColor};
    }
  `;
}
