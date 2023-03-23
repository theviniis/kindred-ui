import { colors } from '../shared';

export type SKINS = Exclude<
  keyof typeof colors,
  'background' | 'foreground' | 'white' | 'black'
>;

export type SIZES = 'sm' | 'md' | 'lg';
