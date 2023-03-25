import { colors } from '../shared';

export type SKINS = Exclude<
  keyof typeof colors,
  'background' | 'text' | 'white' | 'black' | 'text_muted'
>;

export type SIZES = 'sm' | 'md' | 'lg';
