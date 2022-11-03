import { ReactNode } from 'react';

export type COLORS_VARIANTS_OBJECT = {
  variant: string;
  hex: number;
};

export interface ColorsProps {
  children?: ReactNode;
  background: string;
}

export type COLORS_OBJECT = {
  key: string;
  variants: COLORS_VARIANTS_OBJECT[];
};
