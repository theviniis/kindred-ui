import React from 'react';
import { DefaultTheme } from 'styled-components';
import { SIZES, SKINS } from '../../../utils';

export type BUTTON_VARIANTS = 'default' | 'outlined' | 'ghost';

export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  skin?: SKINS;
  variant?: BUTTON_VARIANTS;
  disabled?: boolean;
  size?: SIZES;
  fullWidth?: boolean;
  loading?: boolean;
}

export interface SetVariantProps
  extends Omit<ButtonProps, 'icon' | 'iconPosition' | 'children'> {
  theme: DefaultTheme;
}
