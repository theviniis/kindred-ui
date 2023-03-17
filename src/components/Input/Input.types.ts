import React from 'react';
import { DefaultTheme } from 'styled-components';
import { colors } from '../../shared';

type InputStringProps = Partial<
  Record<
    | 'id'
    | 'name'
    | 'type'
    | 'label'
    | 'placeholder'
    | 'value'
    | 'supportingText',
    string
  >
>;

type InputBooleanProps = Partial<
  Record<'loading' | 'disabled' | 'error', boolean>
>;

type InputIconsProps = Partial<Record<'startIcon' | 'endIcon', JSX.Element>>;

export interface InputProps
  extends Exclude<React.HtmlHTMLAttributes<HTMLInputElement>, 'inputSize'>,
    InputStringProps,
    InputBooleanProps,
    InputIconsProps {
  variant?: 'plain' | 'outlined' | 'soft' | 'solid';
  skin?: Exclude<keyof typeof colors, 'gradients'>;
  inputSize?: 'sm' | 'md' | 'lg';
}

export type StyledInputProps = Pick<
  InputProps,
  'error' | 'variant' | 'skin' | 'loading' | 'inputSize'
>;

export interface InputSetVariantProps
  extends Pick<InputProps, 'variant' | 'skin'> {
  theme: DefaultTheme;
}
