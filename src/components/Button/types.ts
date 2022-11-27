import React from 'react';

export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  children: string;
  skin: 'default' | 'primary' | 'secondary' | 'success' | 'error';
  variant: 'default' | 'stroke' | 'ghost';
  disabled?: boolean;
  icon?: JSX.Element;
  iconPosition?: 'start' | 'end';
}

export interface SetVariantProps
  extends Omit<ButtonProps, 'icon' | 'iconPosition' | 'children'> {
  theme: any;
}
