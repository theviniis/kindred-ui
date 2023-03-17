import React from 'react';
import { DefaultTheme } from 'styled-components';
import { colors } from '../../../';

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

type InputBooleanProps = Partial<Record<'loading' | 'disabled', boolean>>;

type InputIconsProps = Partial<Record<'startIcon' | 'endIcon', JSX.Element>>;

export interface InputProps
  extends Exclude<React.HtmlHTMLAttributes<HTMLInputElement>, 'inputSize'>,
    InputStringProps,
    InputBooleanProps,
    InputIconsProps {
  variant?: 'plain' | 'outlined' | 'soft' | 'solid';
  skin?: Exclude<keyof typeof colors, 'gradients' | 'white' | 'black'>;
  inputSize?: 'sm' | 'md' | 'lg';
}

export type StyledInputProps = Pick<
  InputProps,
  'variant' | 'skin' | 'loading' | 'inputSize'
>;

export interface InputSetVariantProps
  extends Pick<InputProps, 'variant' | 'skin'> {
  theme: DefaultTheme;
}
