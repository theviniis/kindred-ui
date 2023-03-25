import React from 'react';
import { SIZES, SKINS } from '../../../utils';

export type BUTTON_VARIANTS = 'default' | 'outlined' | 'ghost';

export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  children: string;
  skin?: SKINS;
  variant?: BUTTON_VARIANTS;
  disabled?: boolean;
  size?: SIZES;
}

export interface SetVariantProps
  extends Omit<ButtonProps, 'icon' | 'iconPosition' | 'children'> {}
