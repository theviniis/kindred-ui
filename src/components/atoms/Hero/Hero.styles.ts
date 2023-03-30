import styled from 'styled-components';
import { Flex } from '../../';
import { HeroProps } from './Hero.types';

export const HeroWrapper = styled(Flex).attrs({
  direction: 'column',
  gap: 'xs',
})<HeroProps>`
  width: auto;
  height: 260px;
  border-radius: 12px;
  padding: clamp(2rem, 5vw + 1px, 4rem);
  max-width: 1000px;
  margin-bottom: 1rem;
  background-color: #95d6fe;
  background-image: radial-gradient(at 14% 25%, #ff4785 0, transparent 98%),
    radial-gradient(at 96% 89%, #b3e1fe 0, transparent 58%),
    radial-gradient(at 31% 97%, #029af7 0, transparent 99%),
    radial-gradient(at 19% 59%, #58befd 0, transparent 31%),
    radial-gradient(at 97% 75%, #95d6fe 0, transparent 17%);
`;
