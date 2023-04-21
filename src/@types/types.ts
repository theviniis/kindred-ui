import { palette } from '../shared';

export type SKINS = keyof typeof palette;

export type SIZES = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

declare global {
  interface Crypto {
    // eslint-disable-next-line prettier/prettier
    randomUUID: () => `${string}-${string}-${string}-${string}-${string}`;
  }
}
