import styled from 'styled-components';
import { border, KEYFRAMES, spacing } from '../../shared';
import { Typography } from '../Typography';

export const Wrapper = styled(Typography).attrs({ typography: 'paragraph1' })`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  border-radius: ${border.radius.xsmall}px;
  overflow: hidden;
`;

export const ColorKey = styled.span`
  color: ${({ color }) => color};
`;

export const ColorPath = styled.span`
  position: absolute;
  inset: 0;
  display: none;
  background-color: rgb(0 0 0 / 0.2);
  place-content: center;
  padding: ${spacing.medium}px;
  animation: ${KEYFRAMES.fadeIn} 50ms ease-in forwards;
  color: #fff;
`;

export const Content = styled.li<{ background: string; expandable: boolean }>`
  text-align: center;
  background-color: ${({ background }) => background};
  flex-grow: 1;
  padding: ${spacing.medium}px;
  cursor: pointer;
  position: relative;

  &:first-child {
    width: ${({ expandable }) => (expandable ? '100%' : '')};
  }

  ${({ expandable }) => !expandable && `flex-basis: 25%;`}

  &:hover {
    &:not(:first-child) {
      /* width: 100%; */
    }
    ${ColorKey} {
      visibility: hidden;
    }
    ${ColorPath} {
      display: grid;
    }
  }
`;
