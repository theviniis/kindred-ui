import styled from 'styled-components';
import { border, colors, spacing } from '../../shared/theme';

export const Wrapper = styled.div`
  --padding: ${spacing.xlg}px;
  width: 100%;
  height: 300px;
  display: flex;
  flex-direction: column;
  gap: ${spacing.xsm}px;
  color: white;
  background: ${`linear-gradient(135deg, ${colors.primary[100]} 15%, ${colors.primary[600]} 100%)`};
  position: relative;
  border-radius: ${border.radius.xsm}px;
  padding: var(--padding);
`;

export const Image = styled.svg`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
`;
