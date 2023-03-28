import styled from 'styled-components';
import { border } from '../src';

export const SchemeWrapper = styled.div`
  border-radius: ${border.radius.sm};
  overflow: hidden;
`;

export const Flex = styled.div`
  display: flex;
  justify-content: center;
  padding: ${({ theme }) => theme.spacing.lg};
  background-color: ${({ theme }) => theme.colors.background};
`;
