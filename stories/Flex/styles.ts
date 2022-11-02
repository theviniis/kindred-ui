import styled from 'styled-components';
import { border, colors } from '../../src/shared';

export const Content = styled.div`
  background-color: ${colors.primary[100]};
  aspect-ratio: 1;
  width: 62px;
  border-radius: ${border.radius.small}px;
`;
