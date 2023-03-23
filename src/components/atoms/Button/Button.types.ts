import React from 'react';
import { DefaultTheme } from 'styled-components';
import { SKIN_PROPS } from '../../../utils';

export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  children: string;
  skin?: SKIN_PROPS;
  variant?: 'default' | 'stroke' | 'ghost';
  disabled?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

export interface SetVariantProps
  extends Omit<ButtonProps, 'icon' | 'iconPosition' | 'children'> {
  theme: DefaultTheme;
}

export interface SetSizeProps extends Pick<ButtonProps, 'size'> {
  theme: DefaultTheme;
}
