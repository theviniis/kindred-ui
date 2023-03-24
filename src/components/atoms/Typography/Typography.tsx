import React from 'react';
import { css, useTheme } from 'styled-components';
import * as T from './Typography.types';
import * as S from './Typography.styles';
import { SIZES } from '../../../utils';

export const Typography = ({
  children,
  type = 'body',
  size = 'lg',
  weight,
  color,
  spacing,
  as,
  ...props
}: T.TypographyProps) => {
  const { typesystem } = useTheme();
  return (
    <S.Typography
      type={type}
      size={size}
      color={color}
      weight={weight}
      spacing={spacing}
      as={as ?? typesystem[type][size].element}
      {...props}
    >
      {children}
    </S.Typography>
  );
};

export const getTypographyStyles = (
  type: T.TYPOGRAPHY_VARIANTS = 'body',
  size: SIZES = 'lg',
  weight?: T.TYPOGRAPHY_WEIGHTS,
  color?: string,
  spacing?: string
) => {
  const { typography, typesystem, colors } = useTheme();
  return css`
    font-family: ${typesystem[type][size].fontFamily};
    font-size: ${typesystem[type][size].fontSize / 16}rem;
    line-height: ${typesystem[type][size].lineHeight}px;
    font-weight: ${weight
      ? typography.weight[weight]
      : typesystem[type][size].weight};
    letter-spacing: ${spacing ?? typesystem[type][size].letterSpacing}px;
    color: ${color ?? colors.foreground};
  `;
};