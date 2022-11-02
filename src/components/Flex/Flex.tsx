import styled from 'styled-components';
import * as T from './types';
import { spacing } from '../../shared';

export const Flex = styled.div<T.FlexProps>`
  display: flex;
  flex-direction: ${({ direction }): string =>
    direction === 'column' ? 'column' : 'row'};
  gap: ${({ gap }): string =>
    gap || gap === 0 ? gap + 'px' : spacing.small + 'px'};
  justify-content: ${({ justifyContent }): T.JUSTIFY_CONTENT | undefined =>
    justifyContent && justifyContent};
  align-items: ${({ alignItems }): T.ALIGN_ITEMS | undefined =>
    alignItems && alignItems};
  flex-wrap: ${({ wrap }): T.FLEX_WRAP | undefined => wrap && wrap};
`;
