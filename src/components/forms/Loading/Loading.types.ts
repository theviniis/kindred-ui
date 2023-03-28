import React from 'react';
import { SKINS } from '../../../utils';

export interface LoadingProps extends React.HTMLAttributes<HTMLDivElement> {
  skin?: SKINS | 'currentColor';
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  type?: 'bar' | 'circle';
}
