import React from 'react';
import * as T from './types';
import * as S from './styles';

export const Avatar: React.FC<T.AvatarProps> = ({
  src,
  alt,
  size = 'md',
  ...props
}) => {
  return <S.Avatar src={src} alt={alt} {...props} size={size} />;
};
