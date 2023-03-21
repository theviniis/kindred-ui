import React from 'react';
import { DefaultTheme } from 'styled-components';

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
export type InputSkinsProps =
  | 'neutral'
  | 'primary'
  | 'secondary'
  | 'success'
  | 'error';

export interface InputProps
  extends Exclude<React.HtmlHTMLAttributes<HTMLInputElement>, 'inputSize'>,
    InputStringProps,
    InputBooleanProps,
    InputIconsProps {
  skin?: InputSkinsProps;
  size?: 'sm' | 'md' | 'lg';
}

export interface InputSetVariantProps extends Pick<InputProps, 'skin'> {
  theme: DefaultTheme;
}
