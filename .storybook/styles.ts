import styled from 'styled-components';
import { border } from '../src';

export const SchemeWrapper = styled.div`
  border-radius: ${border.radius.small}px;
  overflow: hidden;
`;
export const Flex = styled.div`
  display: flex;
  justify-content: center;
  padding: 2rem 0 2rem;
  background-color: ${({ theme }) => theme.colorBg};
`;
