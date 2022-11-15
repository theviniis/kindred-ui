import styled from 'styled-components';
import { border, spacing } from '../../shared/theme';

export const Wrapper = styled.div`
  --padding: ${spacing.xlarger};
  width: 100%;
  height: 376px;
  display: flex;
  flex-direction: column;
  gap: ${spacing.xsmall};
  color: white;
  background: linear-gradient(135deg, #2328eb 14.64%, #23cceb 85.36%);
  position: relative;
  border-radius: ${border.radius.medium};
  padding: var(--padding);
`;

export const Image = styled.svg`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
`;
