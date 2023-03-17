import React from 'react';
import { H2, P1 } from '../../components';
import { Clouds } from './Clouds';
import * as S from './Hero.styles';
import * as T from './Hero.types';

export const Hero: React.FC<T.HeroProps> = ({ children, title }) => {
  return (
    <S.Wrapper>
      <H2 as="h1">{title}</H2>
      <P1>{children}</P1>
      <Clouds />
    </S.Wrapper>
  );
};
