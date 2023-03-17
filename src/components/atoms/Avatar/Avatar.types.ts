import { HTMLAttributes } from 'react';
import { theme } from '../../../shared';

export interface AvatarProps
  extends HTMLAttributes<HTMLImageElement>,
    Record<'src' | 'alt', string> {
  size: keyof typeof theme.spacing;
}
