import styled from 'styled-components';
import { border, keyframes, spacing } from '../../../shared';

export const Wrapper = styled.p`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  border-radius: ${border.radius.xs}px;
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
  padding: ${spacing.md}px;
  animation: ${keyframes.fadeIn} 50ms ease-in forwards;
  color: #fff;
`;

export const Content = styled.li<{ background: string; expandable: boolean }>`
  text-align: center;
  background-color: ${({ background }) => background};
  flex-grow: 1;
  padding: ${spacing.md}px;
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
