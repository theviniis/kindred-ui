import React, { ReactNode } from 'react';
import { typography, typesystem, SIZES } from '../../../';

export type TYPOGRAPHY_VARIANTS = keyof typeof typesystem;

export type TYPOGRAPHY_WEIGHTS = keyof typeof typography.weight;

export interface TypographyProps extends React.HTMLAttributes<HTMLElement> {
  children?: ReactNode;
  type: TYPOGRAPHY_VARIANTS;
  size?: SIZES;
  weight?: TYPOGRAPHY_WEIGHTS;
  color?: string;
  spacing?: string;
  as?: keyof JSX.IntrinsicElements | React.ComponentType<any>;
  forwardedAs?: keyof JSX.IntrinsicElements | React.ComponentType<any>;
}
