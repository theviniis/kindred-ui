import React from 'react';
import { spacing } from '../../shared';

export interface IconProps extends React.HTMLAttributes<HTMLSpanElement> {
  icon: 'checkSquare';
  variant?: 'stroke' | 'fill';
  skin?: string;
  size?: keyof typeof spacing;
  cursor?: string;
  onClick?: (e?: React.MouseEvent<HTMLSpanElement, MouseEvent>) => void;
}

export interface StyledIconWrapperProps extends Pick<IconProps, 'cursor'> {
  size: number;
}
