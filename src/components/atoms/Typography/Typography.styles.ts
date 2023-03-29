import styled, { FlattenSimpleInterpolation } from 'styled-components';
import { useGetTypographyStyles } from './Typography';
import * as T from './Typography.types';

export const Typography = styled.p<Exclude<T.TypographyProps, 'children'>>`
  ${({ type, size, weight }): FlattenSimpleInterpolation =>
    useGetTypographyStyles(type, size, weight)};
`;
