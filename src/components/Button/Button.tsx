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
  const buttonTypography = {
    xsmall: 'body4',
    small: 'body3',
    medium: 'body2',
    large: 'h6',
    xlarge: 'h4',
  } as const;

  return (
    <S.Button
      forwardedAs="button"
      skin={skin}
      variant={variant}
      disabled={disabled}
      iconPosition={iconPosition}
      size={spacing[size]}
      fullWidth={fullWidth}
      typography={buttonTypography[size]}
      {...props}
    >
      {icon && <Icon icon={icon} size={size} />}
      {children}
    </S.Button>
  );
};
