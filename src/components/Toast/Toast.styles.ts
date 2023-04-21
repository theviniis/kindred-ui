import styled from 'styled-components';

export const ToastContainer = styled.div`
  position: fixed;
  bottom: 2rem;
  right: 2rem;

  display: flex;
  flex-direction: column-reverse;
  gap: 1rem;
`;

export const Toast = styled.span`
  display: inline-block;
  border: 1px solid tomato;
  padding: 1rem 2rem;
`;
