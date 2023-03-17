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
}: T.InputSetVariantProps) {
  const { colors } = theme;
  const colorPrimary = colors[skin].DEFAULT;
  const hoverColorIntensity = colors[skin][600];

  const styles = {
    plain: {
      backgroundColor: colors.neutral[200],
      error: {
        fontColor: colorPrimary,
        borderColor: 'transparent',
        hover: {
          fontColor: hoverColorIntensity,
          borderColor: 'transparent',
        },
        focus: {
          fontColor: colorPrimary,
          borderColor: colorPrimary,
        },
      },
      neutral: {
        fontColor: colors.neutral[500],
        borderColor: 'transparent',
        hover: {
          fontColor: colors.neutral[600],
          borderColor: 'transparent',
        },
        focus: {
          fontColor: colors.foreground,
          borderColor: colors.primary.DEFAULT,
        },
      },
      primary: {
        fontColor: colorPrimary,
        borderColor: 'transparent',
        hover: {
          fontColor: hoverColorIntensity,
          borderColor: 'transparent',
        },
        focus: {
          fontColor: colorPrimary,
          borderColor: colorPrimary,
        },
      },
      secondary: {
        fontColor: colorPrimary,
        borderColor: 'transparent',
        hover: {
          fontColor: hoverColorIntensity,
          borderColor: 'transparent',
        },
        focus: {
          fontColor: colorPrimary,
          borderColor: colorPrimary,
        },
      },
      success: {
        fontColor: colorPrimary,
        borderColor: 'transparent',
        hover: {
          fontColor: hoverColorIntensity,
          borderColor: 'transparent',
        },
        focus: {
          fontColor: colorPrimary,
          borderColor: colorPrimary,
        },
      },
    },
    outlined: {
      backgroundColor: colors.background,
      error: {
        fontColor: colorPrimary,
        borderColor: colorPrimary,
        hover: {
          fontColor: hoverColorIntensity,
          borderColor: hoverColorIntensity,
        },
        focus: {
          fontColor: colorPrimary,
          borderColor: colorPrimary,
        },
      },
      neutral: {
        fontColor: colors.neutral[500],
        borderColor: colors.neutral[300],
        hover: {
          fontColor: colors.neutral[600],
          borderColor: colors.neutral[400],
        },
        focus: {
          fontColor: colors.foreground,
          borderColor: colors.primary.DEFAULT,
        },
      },
      primary: {
        fontColor: colorPrimary,
        borderColor: colorPrimary,
        hover: {
          fontColor: hoverColorIntensity,
          borderColor: hoverColorIntensity,
        },
        focus: {
          fontColor: colorPrimary,
          borderColor: colorPrimary,
        },
      },
      secondary: {
        fontColor: colorPrimary,
        borderColor: colorPrimary,
        hover: {
          fontColor: hoverColorIntensity,
          borderColor: hoverColorIntensity,
        },
        focus: {
          fontColor: colorPrimary,
          borderColor: colorPrimary,
        },
      },
      success: {
        fontColor: colorPrimary,
        borderColor: colorPrimary,
        hover: {
          fontColor: hoverColorIntensity,
          borderColor: hoverColorIntensity,
        },
        focus: {
          fontColor: colorPrimary,
          borderColor: colorPrimary,
        },
      },
    },
    soft: {
      backgroundColor: colors.neutral[200],
      error: {
        fontColor: colorPrimary,
        borderColor: 'transparent',
        hover: {
          fontColor: hoverColorIntensity,
          borderColor: 'transparent',
        },
        focus: {
          fontColor: colorPrimary,
          borderColor: colorPrimary,
        },
      },
      neutral: {
        fontColor: colors.neutral[500],
        borderColor: 'transparent',
        hover: {
          fontColor: colors.neutral[600],
          borderColor: 'transparent',
        },
        focus: {
          fontColor: colors.foreground,
          borderColor: colors.primary.DEFAULT,
        },
      },
      primary: {
        fontColor: colorPrimary,
        borderColor: 'transparent',
        hover: {
          fontColor: hoverColorIntensity,
          borderColor: 'transparent',
        },
        focus: {
          fontColor: colorPrimary,
          borderColor: colorPrimary,
        },
      },
      secondary: {
        fontColor: colorPrimary,
        borderColor: 'transparent',
        hover: {
          fontColor: hoverColorIntensity,
          borderColor: 'transparent',
        },
        focus: {
          fontColor: colorPrimary,
          borderColor: colorPrimary,
        },
      },
      success: {
        fontColor: colorPrimary,
        borderColor: 'transparent',
        hover: {
          fontColor: hoverColorIntensity,
          borderColor: 'transparent',
        },
        focus: {
          fontColor: colorPrimary,
          borderColor: colorPrimary,
        },
      },
    },
    solid: {
      backgroundColor: colors.neutral[200],
      error: {
        fontColor: colorPrimary,
        borderColor: 'transparent',
        hover: {
          fontColor: hoverColorIntensity,
          borderColor: 'transparent',
        },
        focus: {
          fontColor: colorPrimary,
          borderColor: colorPrimary,
        },
      },
      neutral: {
        fontColor: colors.neutral[500],
        borderColor: 'transparent',
        hover: {
          fontColor: colors.neutral[600],
          borderColor: 'transparent',
        },
        focus: {
          fontColor: colors.foreground,
          borderColor: colors.primary.DEFAULT,
        },
      },
      primary: {
        fontColor: colorPrimary,
        borderColor: 'transparent',
        hover: {
          fontColor: hoverColorIntensity,
          borderColor: 'transparent',
        },
        focus: {
          fontColor: colorPrimary,
          borderColor: colorPrimary,
        },
      },
      secondary: {
        fontColor: colorPrimary,
        borderColor: 'transparent',
        hover: {
          fontColor: hoverColorIntensity,
          borderColor: 'transparent',
        },
        focus: {
          fontColor: colorPrimary,
          borderColor: colorPrimary,
        },
      },
      success: {
        fontColor: colorPrimary,
        borderColor: 'transparent',
        hover: {
          fontColor: hoverColorIntensity,
          borderColor: 'transparent',
        },
        focus: {
          fontColor: colorPrimary,
          borderColor: colorPrimary,
        },
      },
    },
  } as const;

  return css`
    background-color: ${styles[variant].backgroundColor};
    border-color: ${styles[variant][skin].borderColor};
    &,
    &::placeholder {
      color: ${styles[variant][skin].fontColor};
    }
    &:hover,
    &:hover::placeholder {
      color: ${styles[variant][skin].hover.fontColor};
      border-color: ${styles[variant][skin].hover.borderColor};
    }
    &:focus {
      color: ${styles[variant][skin].focus.fontColor};
      border-color: ${styles[variant][skin].focus.borderColor};
    }
    &:not(:placeholder-shown) {
      color: ${styles[variant][skin].focus.fontColor};
    }
  `;
}
