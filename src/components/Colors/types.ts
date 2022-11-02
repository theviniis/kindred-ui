import { ReactNode } from 'react';

export interface ColorsProps {
  children?: ReactNode;
  background: string;
}

export interface ColorProps {
  color: { key: string; variants: Array<object> };
}
