import styled from 'styled-components';
import { StyledIconWrapperProps } from './types';

export const IconWrapper = styled.span<StyledIconWrapperProps>`
  display: grid;
  place-content: center;
  overflow: hidden;
  aspect-ratio: 1;
  width: ${({ size }) => size + 'px'};
  cursor: ${({ cursor }) => cursor};
`;
