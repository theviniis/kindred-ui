import styled from 'styled-components';
import { getTypographyStyles } from './Typography';
import * as T from './Typography.types';

export const Typography = styled.p<Exclude<T.TypographyProps, 'children'>>`
  ${({ type, size, weight }) => getTypographyStyles({ type, size, weight })};
`;
