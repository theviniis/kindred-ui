import React from 'react';
import * as T from './Button.types';
import * as S from './Button.style';

export const Button: React.FC<T.ButtonProps> = ({
  children,
  skin = 'neutral',
  variant = 'default',
  disabled = false,
  size = 'md',
  ...props
}) => {
  return (
    <>
      {/* <NewButton>NEW</NewButton> */}
      <S.Button
        skin={skin}
        variant={variant}
        disabled={disabled}
        size={size}
        {...props}
      >
        {children}
      </S.Button>
    </>
  );
};
