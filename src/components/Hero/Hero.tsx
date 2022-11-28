import React from 'react';
import { Typography } from '../../';
import { Clouds } from './Clouds';
import * as S from './styles';
import * as T from './types';

export const Hero: React.FC<T.HeroProps> = ({ children, title }) => {
  return (
    <S.Wrapper>
      <Typography typography="body1">{title}</Typography>
      <Typography typography="paragraph1">{children}</Typography>
      <Clouds />
    </S.Wrapper>
  );
};
