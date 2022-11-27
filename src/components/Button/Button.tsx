import React from 'react';
import * as T from './types';
import * as S from './style';

export const Button: React.FC<T.ButtonProps> = ({
  children,
  skin = 'primary',
  variant = 'default',
  disabled = false,
  icon,
  iconPosition = 'start',
  ...props
}) => {
  return (
    <S.Button
      as="button"
      skin={skin}
      variant={variant}
      disabled={disabled}
      iconPosition={iconPosition}
      {...props}
    >
      {icon && icon}
      {children}
    </S.Button>
  );
};
