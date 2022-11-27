import React from 'react';
import * as T from './types';
import * as S from './style';
import { ICON_SIZES } from '../Icon';

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
      {icon && <S.IconWrapper icon={icon} />}
      {children}
    </S.Button>
  );
};
