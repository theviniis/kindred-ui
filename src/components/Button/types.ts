import React from 'react';
import { DEFAULT_SIZES } from '../../shared';
import { IconProps } from '../Icon';

export type BUTTON_SIZES = DEFAULT_SIZES;
export interface ButtonProps
  extends React.HTMLAttributes<HTMLButtonElement>,
    Pick<IconProps, 'icon'> {
  children: string;
  skin: 'primary' | 'secondary' | 'success' | 'error';
  variant: 'default' | 'stroke' | 'ghost';
  disabled?: boolean;
  size: BUTTON_SIZES;
  iconPosition?: 'start' | 'end';
  fullWidth?: boolean;
}

export interface StyledButtonProps
  extends Pick<
    ButtonProps,
    'iconPosition' | 'disabled' | 'skin' | 'variant' | 'fullWidth'
  > {
  size: number;
}

export interface SetVariantProps
  extends Pick<ButtonProps, 'skin' | 'variant' | 'disabled'> {
  theme: any;
}

export type SetSizeProps = Pick<ButtonProps, 'size'>;
