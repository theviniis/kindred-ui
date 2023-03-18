import styled, { css } from 'styled-components';
import { getTypographyStyles } from '../../';
import * as T from './Input.types';

export const InputWrapper = styled.div<
  Pick<T.InputProps, 'variant' | 'skin' | 'size' | 'loading' | 'label'>
>`
  // display: flex;
  // flex-direction: column-reverse;
  ${getTypographyStyles('p2')};
  ${({ theme, variant, skin }) => setVariant({ theme, variant, skin })};

  label {
    ${({ label }) =>
      !label &&
      `
        visibility: hidden;
        width: 0;
        height: 0;
      `};
  }
`;

export const Label = styled.label<Pick<T.InputProps, 'skin'>>`
  font: inherit;
  display: inline-block;
  margin-block-end: ${({ theme }) => theme.spacing.xxs}px;
  text-transform: capitalize;
`;

export const Input = styled.input`
  font: inherit;
  border: none;
  background: none;
  outline: none;
  overflow: hidden;
  width: 100%;
  border-style: solid;
  border-width: ${({ theme }) => theme.border.width.xs}px;
  border-radius: ${({ theme }) => theme.border.radius.xs}px;
  height: 40px;
  padding-inline: 8px;
  transition: border-color ease-in 150ms;
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
    hoverColor = colors[skin][600];
    fontColor = colors[skin][400];
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
    &:focus-within label {
      color: ${borderColor};
    }
    input {
      background-color: ${styles[variant].background};
      border-color: ${styles[variant].border};
      &,
      &::placeholder {
        color: ${styles[variant].color};
      }
      &:hover,
      &:hover::placeholder {
        border-color: ${styles[variant].hover.border};
      }
      &:focus {
        color: ${borderColor};
        border-color: ${styles[variant].focus.border};
      }
      &:not(:placeholder-shown) {
        color: ${borderColor};
      }
    }
    label {
      color: ${colors.foreground};
    }
  `;
}
