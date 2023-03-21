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
    getPadding({ theme, startIcon, endIcon })};

  .input-container {
    position: relative;
  }
  label {
    pointer-events: none;
    position: absolute;
    top: 0;
    left: 0;
    transform: translate(var(--padding-left), calc(var(--height) / 2 - 50%));
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
    padding-inline: calc(var(--padding-left) / 2);
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
      transform: translate(calc(var(--padding-left) / 2), -50%) scale(0.75);
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

export const IconsWrapper = styled.div`
  position: absolute;
  inset: 0;
  pointer-events: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-inline: var(--padding-left);
  background: none;
  span {
    cursor: pointer;
    pointer-events: initial;
  }
`;

export const SupportingText = styled.span`
  display: block;
  ${() => getTypographyStyles('body2')};
  color: var(--clr-neutral);
`;

function setVariables({ theme, skin = 'neutral' }: T.InputSetVariantProps) {
  const { colors, spacing, border } = theme;
  const clr_default_intensity = 300;
  const clr_hover_intensity = 400;
  const clr_focus_intensity = 300;
  let colorFocus = colors[skin][clr_focus_intensity];
  if (skin === 'neutral') {
    colorFocus = colors.primary[clr_default_intensity];
  }
  return css`
    --height: ${spacing.xlg}px;
    --clr-primary: ${colors[skin][clr_default_intensity]};
    --clr-neutral: ${colors.neutral[clr_default_intensity]};
    --clr-hover: ${colors[skin][clr_hover_intensity]};
    --clr-disabled: ${colors.neutral[200]};
    --clr-focus: ${colorFocus};
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
