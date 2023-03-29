import React from 'react';
import * as T from './Button.types';
import * as S from './Button.style';
import { Loading } from '../../forms/Loading';

export const Button: React.FC<T.ButtonProps> = ({
  children,
  skin = 'neutral',
  variant = 'default',
  disabled = false,
  size = 'md',
  fullWidth = false,
  loading,
  ...props
}) => {
  return (
    <S.Button
      skin={skin}
      variant={variant}
      disabled={disabled}
      size={size}
      loading={loading}
      fullWidth={fullWidth}
      {...props}
    >
      {loading && <Loading size="xs" skin={'currentColor'} />}
      {children}
    </S.Button>
  );
};
