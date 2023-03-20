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
type InputIconsProps = Partial<
  Record<'startHelper' | 'endHelper', JSX.Element>
>;
export type InputSkinsProps = Exclude<
  keyof typeof colors,
  'gradients' | 'white' | 'black'
>;
export type InputVariantsProps = 'plain' | 'outlined' | 'soft' | 'solid';
export interface InputProps
  extends Exclude<React.HtmlHTMLAttributes<HTMLInputElement>, 'inputSize'>,
    InputStringProps,
    InputBooleanProps,
    InputIconsProps {
  variant?: InputVariantsProps;
  skin?: InputSkinsProps;
  size?: 'sm' | 'md' | 'lg';
}

export interface InputSetVariantProps
  extends Pick<InputProps, 'variant' | 'skin'> {
  theme: DefaultTheme;
}
