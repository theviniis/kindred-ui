import React, { forwardRef, Ref } from 'react';
import { Typography } from '../';
import { themes } from '../../../shared';
import * as S from './Hero.styles';
import * as T from './Hero.types';

export const Hero = forwardRef(
  ({ children, title, ...props }: T.HeroProps, ref: Ref<HTMLDivElement>) => {
    return (
      <S.HeroWrapper ref={ref} {...props}>
        <Typography
          type="display"
          size="sm"
          color={themes.light.colors.palette.neutral[100]}
        >
          {title}
        </Typography>
        <Typography
          type="body"
          size="md"
          color={themes.light.colors.palette.neutral[100]}
        >
          {children}
        </Typography>
      </S.HeroWrapper>
    );
  }
);
