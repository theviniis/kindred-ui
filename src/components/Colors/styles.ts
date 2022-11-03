import styled from 'styled-components';
import { border, spacing } from '../../shared';

export const Wrapper = styled.ul`
  flex-direction: column;
  gap: ${spacing.medium}px;
  h4 {
    text-transform: capitalize;
    padding: ${spacing.small}px 0;
  }
  &,
  ul {
    display: flex;
  }
`;

export const List = styled.ul`
  align-items: center;
  flex-wrap: wrap;
  border-radius: ${border.radius.xsmall}px;
  overflow: hidden;
`;

export const Content = styled.li`
  text-align: center;
  background-color: ${({ background }: { background: number }): number =>
    background};
  flex-grow: 1;
  padding: ${spacing.small}px;

  &:first-child {
    padding: ${spacing.medium}px ${spacing.small}px;
    width: 100%;
  }
`;
