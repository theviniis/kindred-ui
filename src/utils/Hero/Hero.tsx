import React from 'react';
import { Typography } from '../../components';
import { Clouds } from './Clouds';
import * as S from './Hero.styles';
import * as T from './Hero.types';

export const Hero: React.FC<T.HeroProps> = ({ children, title }) => {
  return (
    <S.Wrapper>
      <Typography type="headline" forwardedAs="h1">
        {title}
      </Typography>
      <Typography type="body">{children}</Typography>
      <Clouds />
    </S.Wrapper>
  );
};
