import React from 'react';
import { DEFAULT_SIZES } from '../../shared';

export interface IconProps extends React.HTMLAttributes<HTMLSpanElement> {
  icon: 'checkSquare';
  variant?: 'stroke' | 'fill';
  skin?: string;
  size?: DEFAULT_SIZES;
  cursor?: string;
  onClick?: (e?: React.MouseEvent<HTMLSpanElement, MouseEvent>) => void;
}

export interface StyledIconWrapperProps extends Pick<IconProps, 'cursor'> {
  size: number;
}
