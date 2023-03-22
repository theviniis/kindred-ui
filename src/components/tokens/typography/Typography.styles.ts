import styled, { css } from 'styled-components';
import { Flex, getTypographyStyles, TypographyVariantsProps } from '../../';
import { typography } from '../../../shared';

export const TYPOGRAPHY_VARIANTS_LIST = Object.keys(
  typography.typesystem
) as TypographyVariantsProps[];

export const Wrapper = styled(Flex).attrs({ direction: 'column', gap: 'md' })`
  ${createClasses()};
  * {
    margin: 0;
    padding: 0;
  }
  border-radius: ${({ theme }) => theme.border.radius.xs}px;
  padding: ${({ theme }) => theme.spacing.xlg}px;
  background-color: ${({ theme }) => theme.colors.background};
  span {
    display: block;
  }
`;

export const InfoContainer = styled.div``;

export const InfoItem = styled.span`
  ${() => getTypographyStyles('body2')};
  color: ${({ theme }) => theme.colors.neutral[400]};
  white-space: nowrap;
`;

export const Title = styled.h4`
  ${() => getTypographyStyles('title3')};
  text-transform: capitalize;
`;

export const SampleText = styled.p``;

function createClasses() {
  return TYPOGRAPHY_VARIANTS_LIST.map(
    type => css`
      .${type} {
        ${() => getTypographyStyles(type)};
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
    `
  );
}
