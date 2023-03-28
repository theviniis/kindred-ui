import React from 'react';
import { SIZES, SKINS } from '../../../utils';

export interface LoadingProps extends React.HTMLAttributes<HTMLDivElement> {
  skin?: SKINS;
  size: SIZES;
  type?: 'bar' | 'circle';
}
