import styled from 'styled-components';
import { Flex, Typography as Type } from '../..';

export const Wrapper = styled(Flex).attrs({
  direction: 'column',
  gap: 'sm',
})`
  * {
    margin: 0;
    padding: 0;
  }
  border-radius: ${({ theme }) => theme.border.radius.xs}px;
  padding: ${({ theme }) => theme.spacing.xlg}px;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const Typography = styled(Type)`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export const InfoContainer = styled(Typography).attrs({
  type: 'body',
  size: 'md',
  forwardedAs: 'div',
})`
  min-width: 150px;
  span {
    display: block;
    font: inherit;
  }
`;
