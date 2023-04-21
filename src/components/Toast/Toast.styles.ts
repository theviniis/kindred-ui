import styled, { FlattenSimpleInterpolation, css } from 'styled-components';
import { Button as B } from '../atoms';

export const ToastContainer = styled.div`
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  display: flex;
  flex-direction: column-reverse;
  gap: 1rem;
  color: white;
`;

export const Button = styled(B)`
  border-radius: 0px;
`;

export const Toast = styled.span`
  display: flex;
  align-items: center;
  overflow: hidden;
  ${({ theme }): FlattenSimpleInterpolation => css`
    background-color: ${theme.colors.surface[20]};
    border-radius: ${theme.border.radius.xs};
    > p {
      padding: ${theme.spacing.xxs} ${theme.spacing.sm};
    }
  `};
`;
