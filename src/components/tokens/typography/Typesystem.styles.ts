import styled from 'styled-components';
import { Flex, Typography as Type } from '../..';

export const Wrapper = styled(Flex).attrs({
  direction: 'column',
})`
  * {
    margin: 0;
    padding: 0;
  }
  background-color: ${({ theme }) => theme.colors.background};
`;

export const Container = styled(Flex).attrs({
  gap: 'md',
  alignItems: 'center',
})`
  padding: ${({ theme }) => `${theme.spacing.xs}px ${theme.spacing.lg}px`};
  &:nth-child(odd) {
    background-color: ${({ theme }) => theme.colors.text.disabled};
  }
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
  color: ${({ theme }) => theme.colors.text.secondary};
  span {
    display: block;
    font: inherit;
  }
`;
