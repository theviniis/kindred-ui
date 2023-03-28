import styled, { css, FlattenSimpleInterpolation } from 'styled-components';
import { useGetTypographyStyles, Icon } from '../../';
import * as T from './Input.types';

type InputWrapperProps = Pick<
  T.InputProps,
  'skin' | 'startIcon' | 'endIcon' | 'size'
>;

export const Wrapper = styled.div<InputWrapperProps>`
  ${(): FlattenSimpleInterpolation => useGetTypographyStyles('body', 'lg')};
  ${({ theme, skin }): FlattenSimpleInterpolation => setSkin({ theme, skin })};
  ${({ theme, startIcon, endIcon, size }): FlattenSimpleInterpolation =>
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
  transition: all 0.3s ease 0s;
  color: var(--clr-text);
`;

export const Input = styled.input<Pick<T.InputProps, 'label'>>`
  height: var(--height);
  padding-inline-start: var(--padding-left);
  padding-inline-end: var(--padding-right);
  &::placeholder {
    font: inherit;
    color: var(--clr-text-secondary);
    visibility: ${({ label }): string => (label ? 'hidden' : 'visible')};
  }
`;

export const Fieldset = styled.fieldset<Pick<T.InputProps, 'label'>>`
  pointer-events: none;
  position: absolute;
  inset: 0;
  border: solid;
  border-width: var(--border-width);
  border-radius: var(--border-radius);
  padding-inline: calc((var(--padding) / 2) + 1px);
  border-color: var(--clr-primary);
  transition: all 0.3s ease 0s;

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
      padding-left: 5px;
      padding-right: 5px;
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
    color: var(--clr-text);
  }
`;

export const SupportingText = styled.span<Pick<T.InputProps, 'hasError'>>`
  ${(): FlattenSimpleInterpolation => useGetTypographyStyles('body', 'md')};
  display: block;
  color: var(--clr-text-secondary);
  margin-block-start: var(--spacing-xs);
  ${({ hasError }): string => (hasError ? 'color: var(--clr-error)' : '')};
`;

export const ErrorIcon = styled(Icon).attrs({ icon: 'FiAlertTriangle' })`
  color: var(--clr-error) !important;
`;

function setSkin({
  theme,
  skin = 'neutral',
}: T.InputSetSkinProps): FlattenSimpleInterpolation {
  const { colors, border } = theme;
  const { palette, text } = colors;
  const colorPrimary = palette[skin][500];
  const colorHover = palette[skin][600];
  let colorFocus = palette[skin][500];
  const colorDisabled = text.disabled;
  const colorText = colorPrimary;

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

function getPadding({
  theme,
  startIcon,
  endIcon,
  size,
}: T.GetPaddingProps): FlattenSimpleInterpolation {
  const { spacing } = theme;
  const heightConfig = {
    sm: spacing.lg,
    md: spacing.xlg,
    lg: spacing.xxlg,
  };
  const defaultPadding = parseInt(spacing.xs, 10);
  const iconSize = defaultPadding;
  let paddingLeft = defaultPadding;
  let paddingRight = defaultPadding;
  if (startIcon) {
    paddingLeft += defaultPadding + iconSize;
  } else if (endIcon) {
    paddingRight += defaultPadding + iconSize;
  }
  return css`
    --height: ${heightConfig[size]};
    --padding: ${defaultPadding}px;
    --padding-left: ${paddingLeft}px;
    --padding-right: ${paddingRight}px;
    --icon-container-size: ${iconSize}px;
  `;
}
