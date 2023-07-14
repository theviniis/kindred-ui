import _ from 'lodash-es';
import { themes } from '../shared';
import { DefaultTheme } from 'styled-components';

export function createTheme<T>(
  theme: T,
  scheme: 'light' | 'dark' = 'light'
): DefaultTheme {
  const newTheme = _.merge(themes[scheme], theme);
  return newTheme;
}
