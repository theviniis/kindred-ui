import React from 'react';
import { IconProps, ICON_SIZES, ICON_VARIANTS } from './types';
import * as S from './style';
import { colors } from '../../shared';
import { BsCheckSquare, BsCheckSquareFill } from 'react-icons/bs';
import { IconContext } from 'react-icons/lib';

export const Icon: React.FC<IconProps> = ({
  icon,
  skin = colors.neutral[100].color,
  variant = ICON_VARIANTS.stroke,
  size = ICON_SIZES.small,
  cursor = 'pointer',
  onClick,
  ...props
}) => {
  if (!icon) return null;

  const iconOptions = {
    checkSquare: {
      stroke: <BsCheckSquare />,
      fill: <BsCheckSquareFill />,
    },
  };

  return (
    <IconContext.Provider value={{ color: skin, size }}>
      <S.IconWrapper {...props} onClick={onClick} size={size} cursor={cursor}>
        {iconOptions[icon][variant]}
      </S.IconWrapper>
    </IconContext.Provider>
  );
};
