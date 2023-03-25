import _ from 'lodash';
import { themes } from '../shared';

export function createTheme<T>(theme: T, scheme: 'light' | 'dark' = 'light') {
  const newTheme = _.merge(themes[scheme], theme);
  return newTheme;
}
