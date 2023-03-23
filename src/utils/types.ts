import { colors } from '../shared';

export type SKIN_PROPS = Exclude<
  keyof typeof colors,
  'background' | 'foreground' | 'white' | 'black'
>;
