import styled, { css } from 'styled-components';
import { getTypographyStyles } from '../../';
import * as T from './Input.types';

type InputWrapperProps = Pick<
  T.InputProps,
  'skin' | 'startIcon' | 'endIcon' | 'label'
>;

export const Wrapper = styled.div<InputWrapperProps>`
  ${() => getTypographyStyles('body1')};
  ${({ theme, skin }) => setVariables({ theme, skin })};
  ${({ theme, startIcon, endIcon }) =>
    getPadding({ theme, startIcon, endIcon })}
  > div:first-child {
    position: relative;
  }
  label {
    ${() => getTypographyStyles('body1')};
    pointer-events: none;
    position: absolute;
    top: 0;
    left: 0;
    transform: translate(var(--padding), calc(var(--height) / 2 - 50%));
    transition: transform ease-in-out 100ms;
  }
  input {
    height: var(--height);
    padding-inline-start: var(--padding-left);
    padding-inline-end: var(--padding-right);
    &::placeholder {
      font: inherit;
      visibility: ${({ label }) => !!label && 'hidden'};
    }
  }
  fieldset {
    pointer-events: none;
    position: absolute;
    inset: 0;
    top: 0;
    border: solid;
    border-width: var(--border-width);
    border-radius: var(--border-radius);
    padding-inline: calc(var(--padding) / 2);
    border-color: var(--clr-primary);
    transition: border-color ease-in-out 100ms;

    legend {
      display: block;
      visibility: hidden;
      width: auto;
      text-align: left;
      max-width: 0;
      height: 0;
    }
  }
  /* When is hovering */
  &:hover fieldset {
    border-color: var(--clr-hover);
  }
  /* When is focused */
  &:has(input:focus),
  /* When placeholder not showing */
  &:has(input:not(:placeholder-shown)) {
    label {
      transform: translate(calc(var(--padding) / 2), -50%) scale(0.75);
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
    color: var(--clr-disabled);
    fieldset {
      border-color: currentColor;
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
  }
`;

export const SupportingText = styled.span`
  display: block;
  ${() => getTypographyStyles('body2')};
  color: var(--clr-primary);
`;

function setVariables({ theme, skin = 'neutral' }: T.InputSetVariantProps) {
  const { colors, spacing, border } = theme;
  let colorFocus = colors[skin][500];
  if (skin === 'neutral') {
    colorFocus = colors.primary[400];
  }
  return css`
    --padding: ${spacing.xs}px;
    --height: ${spacing.xlg}px;
    --clr-primary: ${colors[skin][400]};
    --clr-hover: ${colors[skin][500]};
    --clr-focus: ${colorFocus};
    --clr-disabled: ${colors.neutral[300]};
    --border-width: ${border.width.xs}px;
    --border-radius: ${border.radius.xs}px;
  `;
}

function getPadding({
  theme,
  startIcon,
  endIcon,
}: Pick<T.InputProps, 'startIcon' | 'endIcon'> &
  Pick<T.InputSetVariantProps, 'theme'>) {
  const { spacing } = theme;
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
    --padding-left: ${padding_left}px;
    --padding-right: ${padding_right}px;
    --icon-container-size: ${icon_size}px;
  `;
}
