import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  height: 300px;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }): string => theme.spacing.xs};
  color: white;
  position: relative;
  border-radius: ${({ theme }): string => theme.border.radius.xs};
  padding: ${({ theme }): string => theme.spacing.xlg};
`;

export const Image = styled.svg`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
`;
