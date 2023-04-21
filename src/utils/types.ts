import { palette } from '../shared';

export type SKINS = keyof typeof palette;

export type SIZES = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

declare global {
  // interface Crypto {
  //   randomUUID: () => string;
  // }
}
