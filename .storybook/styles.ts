import styled from 'styled-components';
import { border } from '../src';

export const SchemeWrapper = styled.div`
  border-radius: ${border.radius.sm}px;
  overflow: hidden;
`;

export const Flex = styled.div`
  display: flex;
  justify-content: center;
  padding: ${({ theme }) => theme.spacing.lg}px 0
    ${({ theme }) => theme.spacing.lg}px;
  background-color: ${({ theme }) => theme.colors.background};
`;
