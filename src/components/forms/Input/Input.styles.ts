import styled, { css } from 'styled-components';
import { getTypographyStyles } from '../../';
import * as T from './Input.types';

type InputWrapperProps = Pick<
  T.InputProps,
  'skin' | 'startIcon' | 'endIcon' | 'size'
>;

export const Wrapper = styled.div<InputWrapperProps>`
  ${() => getTypographyStyles('body', 'lg')};
  ${({ theme, skin }) => setSkin({ theme, skin })};
  ${({ theme, startIcon, endIcon, size }) =>
    getPadding({ theme, startIcon, endIcon, size })};
`;

export const InputContainer = styled.div`
  position: relative;
  /* When is hovering */
  &:hover fieldset {
    border-color: var(--clr-hover);
  }
  /* When is focused */
  &:has(input:focus),
  /* When placeholder not showing */
  &:has(input:not(:placeholder-shown)) {
    label {
      transform: none;
      top: 0;
      left: calc(var(--padding) + 0.25px);
      transform-origin: top;
      transform: scale(0.75) translateY(-50%);
      color: var(--clr-focus);
    }
    input::placeholder {
      visibility: visible;
    }
    fieldset {
      border-color: var(--clr-focus);
      legend {
        max-width: min-content;
      }
    }
  }
  /* When is disabled */
  &:has(input:disabled) {
    cursor: not-allowed;
    * {
      color: var(--clr-disabled);
    }
    fieldset {
      border-color: currentColor;
    }
  }
`;

export const Label = styled.label`
  pointer-events: none;
  position: absolute;
  top: 50%;
  left: var(--padding-left);
  transform: translateY(-50%);
  transition: ease-in-out 100ms;
`;

export const Input = styled.input<Pick<T.InputProps, 'label'>>`
  height: var(--height);
  padding-inline-start: var(--padding-left);
  padding-inline-end: var(--padding-right);
  &::placeholder {
    font: inherit;
    color: var(--clr-neutral-muted);
    visibility: ${({ label }) => !!label && 'hidden'};
  }
`;

export const Fieldset = styled.fieldset`
  pointer-events: none;
  position: absolute;
  inset: 0;
  top: 0;
  border: solid;
  border-width: var(--border-width);
  border-radius: var(--border-radius);
  padding-inline: var(--padding);
  border-color: var(--clr-primary);
  transition: border-color ease-in-out 100ms;
  legend {
    display: block;
    visibility: hidden;
    max-width: 0;
    height: 0;
  }
`;

export const IconsWrapper = styled.div`
  position: absolute;
  inset: 0;
  pointer-events: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-inline: var(--padding);
  background: none;
  span {
    cursor: pointer;
    pointer-events: initial;
  }
`;

export const SupportingText = styled.span`
  ${() => getTypographyStyles('body', 'md')};
  display: block;
  color: var(--clr-neutral-muted);
`;

function setSkin({ theme, skin = 'neutral' }: T.InputSetSkinProps) {
  const { colors, border } = theme;
  let clr_primary = colors[skin][300];
  let clr_hover = colors[skin][400];
  let clr_focus = colors[skin][300];
  let clr_neutral = colors.text;
  let clr_neutral_muted = colors.text_muted;
  let clr_disabled = colors.neutral[200];
  if (skin === 'neutral') {
    clr_primary = clr_neutral_muted;
    clr_hover = clr_neutral;
    clr_focus = colors.primary[300];
  }
  return css`
    --clr-neutral: ${clr_neutral};
    --clr-neutral-muted: ${clr_neutral_muted};
    --clr-primary: ${clr_primary};
    --clr-hover: ${clr_hover};
    --clr-disabled: ${clr_disabled};
    --clr-focus: ${clr_focus};
    --border-width: ${border.width.xs}px;
    --border-radius: ${border.radius.xs}px;
  `;
}

function getPadding({ theme, startIcon, endIcon, size }: T.GetPaddingProps) {
  const { spacing } = theme;
  const height_config = {
    sm: spacing.lg,
    md: spacing.xlg,
    lg: spacing.xxlg,
  };
  const default_padding = spacing.xs;
  const icon_size = default_padding;
  let padding_left = default_padding;
  let padding_right = default_padding;
  if (startIcon) {
    padding_left += default_padding + icon_size;
  } else if (endIcon) {
    padding_right += default_padding + icon_size;
  }
  return css`
    --height: ${height_config[size]}px;
    --padding: ${default_padding}px;
    --padding-left: ${padding_left}px;
    --padding-right: ${padding_right}px;
    --icon-container-size: ${icon_size}px;
  `;
}
