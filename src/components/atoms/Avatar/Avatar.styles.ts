import styled from 'styled-components';
import * as T from './Avatar.types';

export const Avatar = styled.img<Pick<T.AvatarProps, 'size'>>`
  display: inline-block;
  aspect-ratio: 1;
  border-style: solid;
  border-color: ${({ theme }): string => theme.colors.text.primary};
  border-width: ${({ theme }): string => theme.border.width.sm};
  border-radius: ${({ theme }): string => theme.border.radius.circular};
  width: ${({ size }): string => `var(--size-${size})`};
`;
