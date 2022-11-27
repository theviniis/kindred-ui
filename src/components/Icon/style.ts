import styled from 'styled-components';
import { IconProps } from './types';

export const IconWrapper = styled.span<
  Pick<IconProps, 'onClick' | 'cursor' | 'size'>
>`
  overflow: hidden;
  aspect-ratio: 1;
  width: ${({ size }) => size};
  cursor: ${({ cursor }) => cursor};
`;
