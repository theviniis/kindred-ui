import React from 'react';
import { useTheme } from 'styled-components';
import * as T from './Icon.types';
import {
  FiAlertTriangle,
  FiEye,
  FiEyeOff,
  FiPackage,
  FiShoppingCart,
} from 'react-icons/fi';

export const Icon: React.FC<T.IconProps> = ({
  children,
  icon,
  skin,
  size = 'xs',
  title,
  ...props
}) => {
  const theme = useTheme();
  const iconsProps = {
    size: theme.size[size],
    title,
    style: { cursor: 'pointer' },
    ...props,
  } as const;
  const iconsVariants = {
    FiEye: <FiEye {...iconsProps} />,
    FiEyeOff: <FiEyeOff {...iconsProps} />,
    FiAlertTriangle: <FiAlertTriangle {...iconsProps} />,
    FiShoppingCart: <FiShoppingCart {...iconsProps} />,
    FiPackage: <FiPackage {...iconsProps} />,
  } as const;
  const Component = iconsVariants[icon];
  return Component;
};
