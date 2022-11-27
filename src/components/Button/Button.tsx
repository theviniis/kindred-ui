import React from 'react';
import * as T from './types';
import * as S from './style';
import { Icon } from '../Icon';
import { spacing } from '../../shared';

export const Button: React.FC<T.ButtonProps> = ({
  children,
  skin = 'primary',
  variant = 'default',
  disabled = false,
  size = 'medium',
  fullWidth = false,
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
      size={fullWidth ? '100%' : `${spacing[size]}px`}
      {...props}
    >
      {icon && <Icon icon={icon} size={size} />}
      {children}
    </S.Button>
  );
};
