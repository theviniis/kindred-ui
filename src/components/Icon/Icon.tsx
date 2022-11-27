import React from 'react';
import { IconProps, ICON_SIZES, ICON_VARIANTS } from './types';
import * as S from './style';
import { colors } from '../../shared';
import { FaRegCheckSquare, FaCheckSquare } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';

const iconOptions = {
  checkSquare: {
    stroke: <FaRegCheckSquare />,
    fill: <FaCheckSquare />,
  },
};

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
  return (
    <IconContext.Provider value={{ color: skin, size }}>
      <S.IconWrapper onClick={onClick} size={size} cursor={cursor} {...props}>
        {iconOptions[icon][variant]}
      </S.IconWrapper>
    </IconContext.Provider>
  );
};
