import { ReactNode } from 'react';

export type TYPOGRAPHY_VARIANTS =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'paragraph-1'
  | 'paragraph-2'
  | 'paragraph-3';
export interface TypographyProps {
  children?: ReactNode;
  variant: TYPOGRAPHY_VARIANTS;
}
