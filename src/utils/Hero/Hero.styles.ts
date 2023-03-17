import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  height: 300px;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.xs}px;
  color: white;
  position: relative;
  border-radius: ${({ theme }) => theme.border.radius.xs}px;
  padding: ${({ theme }) => theme.spacing.xlg}px;
  ${({ theme }) => theme.colors.gradients.info};
`;

export const Image = styled.svg`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
`;
