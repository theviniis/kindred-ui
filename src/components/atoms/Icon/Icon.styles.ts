import styled from 'styled-components';
import { IconProps } from './Icon.types';

export const Wrapper = styled.div<Pick<IconProps, 'skin' | 'size'>>`
  &,
  > * {
    /* display: block; */
    /* aspect-ratio: 1; */
    /* width: ${({ size }) => `var(--sizes-${size})`}; */
    /* color: ${({ skin }) => `var(--clr-${skin}-500)`}; */
    &:hover {
      /* color: ${({ skin }) => `var(--clr-${skin}-600)`}; */
    }
  }
`;
