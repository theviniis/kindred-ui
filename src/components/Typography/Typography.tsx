import React from 'react';
import * as T from './types';
import * as S from './styles';

export const Typography: React.FC<T.TypographyProps> = ({
  children,
  variant,
}) => {
  if ((variant = 'h1')) return <S.H1>{children}</S.H1>;
  return <S.Wrapper>{children}</S.Wrapper>;
};
