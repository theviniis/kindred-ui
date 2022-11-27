import React from 'react';

export enum ICON_SIZES {
  nano = '4px',
  xsmall = '8px',
  small = '16px',
  medium = '24px',
  large = '32px',
  xlarge = '40px',
}

export enum ICON_VARIANTS {
  stroke = 'stroke',
  fill = 'fill',
}

export enum ICONS {
  checkSquare = 'checkSquare',
}

export interface IconProps extends React.HTMLAttributes<HTMLSpanElement> {
  icon: ICONS;
  variant?: ICON_VARIANTS;
  skin?: string;
  size?: ICON_SIZES;
  cursor?: string;
  onClick?: (e?: React.MouseEvent<HTMLSpanElement, MouseEvent>) => void;
}
