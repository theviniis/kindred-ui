import React from 'react';
import { SIZES, SKINS } from '../../../utils';

export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  children: string;
  skin?: SKINS;
  variant?: 'default' | 'outlined' | 'ghost';
  disabled?: boolean;
  size?: SIZES;
}

export interface SetVariantProps
  extends Omit<ButtonProps, 'icon' | 'iconPosition' | 'children'> {}
