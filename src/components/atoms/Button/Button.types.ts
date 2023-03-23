import React from 'react';
import { COMPONENTS_SIZES, SKIN_PROPS } from '../../../utils';

export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  children: string;
  skin?: SKIN_PROPS;
  variant?: 'default' | 'outlined' | 'ghost';
  disabled?: boolean;
  size?: COMPONENTS_SIZES;
}

export interface SetVariantProps
  extends Omit<ButtonProps, 'icon' | 'iconPosition' | 'children'> {}
