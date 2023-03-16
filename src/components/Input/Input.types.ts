import React from 'react';
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
  extends React.HtmlHTMLAttributes<HTMLInputElement>,
    InputStringProps,
    InputBooleanProps,
    InputIconsProps {
  variant?: 'plain' | 'outlined' | 'soft' | 'solid';
  skin?: Exclude<keyof typeof colors, 'gradients'>;
  size?: 'sm' | 'md' | 'lg';
}
