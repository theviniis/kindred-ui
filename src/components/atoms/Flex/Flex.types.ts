import { ReactNode } from 'react';
import { spacing } from '../../../shared';

export type JUSTIFY_CONTENT =
  | 'flex-start'
  | 'flex-end'
  | 'center'
  | 'space-between'
  | 'space-around'
  | 'space-evenly'
  | 'initial'
  | 'inherit';

export type ALIGN_ITEMS =
  | 'stretch'
  | 'center'
  | 'flex-start'
  | 'flex-end'
  | 'baseline'
  | 'initial'
  | 'inherit';

export type FLEX_WRAP =
  | 'nowrap'
  | 'wrap'
  | 'wrap-reverse'
  | 'initial'
  | 'inherit';

export interface FlexProps {
  children?: ReactNode;
  direction?: 'column' | 'row';
  gap?: keyof typeof spacing;
  justifyContent?: JUSTIFY_CONTENT;
  alignItems?: ALIGN_ITEMS;
  wrap?: FLEX_WRAP;
}
