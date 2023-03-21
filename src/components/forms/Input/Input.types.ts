import React from 'react';
import { DefaultTheme } from 'styled-components';
import { colors } from '../../../shared';

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

export type SkinsProps = Exclude<
  keyof typeof colors,
  'gradients' | 'white' | 'black'
>;

export type SizesProps = 'sm' | 'md' | 'lg';
export interface InputProps
  extends Exclude<React.HtmlHTMLAttributes<HTMLInputElement>, 'inputSize'>,
    InputStringProps,
    InputBooleanProps,
    InputIconsProps {
  skin?: SkinsProps;
  size: SizesProps;
}

export interface InputSetSkinProps extends Pick<InputProps, 'skin'> {
  theme: DefaultTheme;
}

export interface GetPaddingProps
  extends Pick<InputProps, 'startIcon' | 'endIcon' | 'size'> {
  theme: DefaultTheme;
}
