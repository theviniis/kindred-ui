import styled, { css } from 'styled-components';
import { getTypographyStyles, Icon } from '../../';
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
      left: var(--padding);
      transform-origin: top left;
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
  transition: 100ms cubic-bezier(0, 0, 0.2, 1) 50ms;
  color: var(--clr-text);
`;

export const Input = styled.input<Pick<T.InputProps, 'label'>>`
  height: var(--height);
  padding-inline-start: var(--padding-left);
  padding-inline-end: var(--padding-right);
  &::placeholder {
    font: inherit;
    color: var(--clr-text-secondary);
    visibility: ${({ label }) => !!label && 'hidden'};
  }
`;

export const Fieldset = styled.fieldset<Pick<T.InputProps, 'label'>>`
  pointer-events: none;
  position: absolute;
  inset: 0;
  border: solid;
  border-width: var(--border-width);
  border-radius: var(--border-radius);
  padding-inline: 8.775px;
  border-color: var(--clr-primary);
  transition: border-color 100ms cubic-bezier(0, 0, 0.2, 1) 50ms;
  legend {
    display: block;
    visibility: hidden;
    height: 0;
    max-width: 0;
    font-size: 0.75em;
    white-space: nowrap;
    span {
      display: inline-block;
      opacity: 0;
      visibility: visible;
      ${({ label }) =>
        label &&
        css`
          padding-left: 5px;
          padding-right: 5px;
        `}
    }
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
    display: grid;
    place-content: center;
  }
`;

export const SupportingText = styled.span<Pick<T.InputProps, 'hasError'>>`
  ${() => getTypographyStyles('body', 'md')};
  display: block;
  color: var(--clr-text-secondary);
  margin-block-start: var(--spacing-xs);
  ${({ hasError }) => hasError && 'color: var(--clr-error)'};
`;

export const ErrorIcon = styled(Icon).attrs({ icon: 'FiAlertTriangle' })`
  color: var(--clr-error) !important;
`;

function setSkin({ theme, skin = 'neutral' }: T.InputSetSkinProps) {
  const { colors, border } = theme;
  const { palette, text } = colors;

  let colorPrimary = palette[skin][500];
  let colorHover = palette[skin][600];
  let colorFocus = palette[skin][500];
  let colorDisabled = text.disabled;
  let colorText = colorPrimary;

  if (skin === 'neutral') {
    colorFocus = palette.pink[500];
  }

  return css`
    --clr-primary: ${colorPrimary};
    --clr-hover: ${colorHover};
    --clr-focus: ${colorFocus};
    --clr-disabled: ${colorDisabled};
    --clr-error: ${colors.coreColors.red};
    --clr-text: ${colorText};
    --clr-text-secondary: ${text.disabled};
    --border-width: ${border.width.sm};
    --border-radius: ${border.radius.xs};
  `;
}

function getPadding({ theme, startIcon, endIcon, size }: T.GetPaddingProps) {
  const { spacing } = theme;
  const height_config = {
    sm: spacing.lg,
    md: spacing.xlg,
    lg: spacing.xxlg,
  };
  const default_padding = parseInt(spacing.sm, 10);
  const icon_size = default_padding;
  let padding_left = default_padding;
  let padding_right = default_padding;
  if (startIcon) {
    padding_left += default_padding + icon_size;
  } else if (endIcon) {
    padding_right += default_padding + icon_size;
  }
  return css`
    --height: ${height_config[size]};
    --padding: ${default_padding}px;
    --padding-left: ${padding_left}px;
    --padding-right: ${padding_right}px;
    --icon-container-size: ${icon_size}px;
  `;
}
