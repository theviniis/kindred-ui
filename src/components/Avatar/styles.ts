import styled from 'styled-components';
import * as T from './types';

export const Avatar = styled.img<Pick<T.AvatarProps, 'size'>>`
  display: inline-block;
  aspect-ratio: 1;
  border-style: solid;
  border-color: ${({ theme }) => theme.colorFg};
  border-width: ${({ theme }) => theme.border.width.small}px;
  border-radius: ${({ theme }) => theme.border.radius.circular};
  width: ${({ theme, size }) => theme.spacing[size] * 2}px;
`;
