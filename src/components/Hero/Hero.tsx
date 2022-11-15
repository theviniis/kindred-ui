import React from 'react';
import { Typography } from '../Typography';
import { Clouds } from './Clouds';
import * as S from './styles';
import * as T from './types';

export const Hero: React.FC<T.HeroProps> = ({ children, title }) => {
  return (
    <S.Wrapper>
      <Typography.H2 as="h1">{title}</Typography.H2>
      <Typography.P1>{children}</Typography.P1>
      <Clouds />
    </S.Wrapper>
  );
};
