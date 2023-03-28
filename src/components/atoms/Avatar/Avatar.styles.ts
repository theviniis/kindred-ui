import styled from 'styled-components';
import * as T from './Avatar.types';

export const Avatar = styled.img<Pick<T.AvatarProps, 'size'>>`
  display: inline-block;
  aspect-ratio: 1;
  border-style: solid;
  border-color: ${({ theme }) => theme.colors.text};
  border-width: ${({ theme }) => theme.border.width.sm};
  border-radius: ${({ theme }) => theme.border.radius.circular};
  width: ${({ size }) => `var(--size-${size})`};
`;
