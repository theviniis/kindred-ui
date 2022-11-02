import styled from 'styled-components';
import { border, colors, spacing } from '../../shared';

export const Wrapper = styled.ul`
  flex-direction: column;
  gap: ${spacing.medium}px;
  h4 {
    margin: 0;
    padding 0;
    text-transform: capitalize;
    padding: ${spacing.small}px 0;
  }
  &,
  ul {
    display: flex;
  }
  ul {
    padding: 0;
  }
  li {
    list-style: none;
  }

  > li {
    /* border: ${border.width.small}px solid ${colors.neutral[800]}; */
    /* padding: ${spacing.medium}px; */
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
  background-color: ${({ background }): string => background};
  flex-grow: 1;
  padding: ${spacing.small}px;

  &:first-child {
    padding: ${spacing.medium}px ${spacing.small}px;
    width: 100%;
  }
`;
