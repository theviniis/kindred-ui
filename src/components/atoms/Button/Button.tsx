import React from 'react';
import * as T from './Button.types';
import * as S from './Button.style';

export const Button: React.FC<T.ButtonProps> = ({
  children,
  skin = 'neutral',
  variant = 'default',
  disabled = false,
  size = 'md',
  fullWidth = false,
  ...props
}) => {
  return (
    <S.Button
      skin={skin}
      variant={variant}
      disabled={disabled}
      size={size}
      fullWidth={fullWidth}
      {...props}
    >
      {children}
    </S.Button>
  );
};
