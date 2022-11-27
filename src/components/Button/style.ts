import styled, { css, FlattenSimpleInterpolation } from 'styled-components';
import { border, spacing } from '../../shared';
import { S2 } from '../Typography';
import { ButtonProps, SetVariantProps } from './types';

const setVariant = ({
  theme,
  skin,
  variant,
  disabled,
}: SetVariantProps): FlattenSimpleInterpolation => {
  if (disabled) {
    return css``;
  }
  return css``;
};

export const Button = styled(S2)<Omit<ButtonProps, 'icon' | 'children'>>`
  display: flex;
  gap: ${spacing.xsmall}px;
  align-items: center;
  flex-direction: ${({ iconPosition }) =>
    iconPosition === 'start' ? 'row' : 'row-reverse'};
  padding: ${spacing.xsmall}px ${spacing.small}px;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  border-radius: ${border.radius.xsmall}px;
  border-style: solid;
  border-width: ${border.width.xsmall}px;

  ${({ theme, skin, variant, disabled }) =>
    setVariant({ theme, skin, variant, disabled })}
`;
