import React from 'react';
import * as T from './Loading.types';
import * as S from './Loading.styles';

export const Loading: React.FC<T.LoadingProps> = ({
  size = 'md',
  skin = 'neutral',
  type = 'circle',
}) => {
  const lookup = {
    circle: (
      <S.CircleLoading viewBox="25 25 50 50">
        <circle r="20" cy="50" cx="50"></circle>
      </S.CircleLoading>
    ),
    bar: (
      <S.BarLoading>
        <div></div>
      </S.BarLoading>
    ),
  } as const;
  const Component = lookup[type];
  return (
    <S.Wrapper size={size} skin={skin}>
      {Component}
    </S.Wrapper>
  );
};
