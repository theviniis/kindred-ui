import React from 'react';
import * as T from './Avatar.types';
import * as S from './Avatar.styles';

export const Avatar: React.FC<T.AvatarProps> = ({
  src,
  alt,
  size = 'md',
  ...props
}) => {
  return <S.Avatar src={src} alt={alt} {...props} size={size} />;
};
