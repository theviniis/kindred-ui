import styled from 'styled-components';
import * as T from './Input.types';

export const InputWrapper = styled.div``;
export const Label = styled.label``;

export const Input = styled.input<
  Pick<T.InputProps, 'error' | 'variant' | 'skin' | 'loading'>
>`
  font: inherit;
  border: none;
  background: none;
`;

export const SupportingText = styled.span``;

export const IconsWrapper = styled.span``;
