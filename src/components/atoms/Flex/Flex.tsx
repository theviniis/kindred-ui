import styled from 'styled-components';
import * as T from './Flex.types';

export const Flex = styled.div<T.FlexProps>`
  display: flex;
  flex-direction: ${({ direction }): string =>
    direction === 'column' ? 'column' : 'row'};
  gap: ${({ theme, gap }) => (gap ? theme.spacing[gap] : '0')}px;
  justify-content: ${({ justifyContent }): T.JUSTIFY_CONTENT | undefined =>
    justifyContent && justifyContent};
  align-items: ${({ alignItems }): T.ALIGN_ITEMS | undefined =>
    alignItems && alignItems};
  flex-wrap: ${({ wrap }): T.FLEX_WRAP | undefined => wrap && wrap};
`;
