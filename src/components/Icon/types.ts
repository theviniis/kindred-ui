import React from "react";

export enum ICON_SIZES {
  nano = '4px',
  xsmall = '8px',
  small = '16px',
  medium = '24px',
  large = '32px',
  xlarge = '40px',
}

export interface IconProps extends React.HTMLAttributes<HTMLSpanElement> {
  icon: 'checkSquare';
  variant: 'stroke' | 'fill';
  skin: `#${string}`;
  size: ICON_SIZES;
  cursor?: string;
  onClick?: (e?: React.MouseEvent<HTMLSpanElement, MouseEvent>) => void;
}
