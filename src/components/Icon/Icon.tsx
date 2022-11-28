import React from 'react';
import { IconProps } from './types';
import * as S from './style';
import { colors, spacing } from '../../shared';
import { BsCheckSquare, BsCheckSquareFill } from 'react-icons/bs';
import { IconContext } from 'react-icons/lib';

const iconOptions = {
  checkSquare: {
    stroke: <BsCheckSquare />,
    fill: <BsCheckSquareFill />,
  },
};

export const Icon: React.FC<IconProps> = ({
  icon,
  skin = colors.neutral[100].color,
  variant = 'stroke',
  size = 'medium',
  cursor = 'pointer',
  onClick,
  ...props
}) => {
  if (!icon) return null;

  return (
    <IconContext.Provider
      value={{ className: 'react-icons', size: spacing[size] + 'px' }}
    >
      <S.IconWrapper
        onClick={onClick}
        size={spacing[size]}
        cursor={cursor}
        {...props}
      >
        {iconOptions[icon][variant]}
      </S.IconWrapper>
    </IconContext.Provider>
  );
};
