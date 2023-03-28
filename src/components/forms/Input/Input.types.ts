import { InputHTMLAttributes } from 'react';
import { DefaultTheme } from 'styled-components';
import { SIZES, SKINS } from '../../../utils';

type InputStringProps = Partial<Record<'label' | 'supportingText', string>>;

type InputIconsProps = Partial<Record<'startIcon' | 'endIcon', JSX.Element>>;

export interface InputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'>,
    InputStringProps,
    InputIconsProps {
  skin?: SKINS;
  size: SIZES;
  loading: boolean;
  hasError?: boolean;
}

export interface InputSetSkinProps extends Pick<InputProps, 'skin'> {
  theme: DefaultTheme;
}

export interface GetPaddingProps
  extends Pick<InputProps, 'startIcon' | 'endIcon' | 'size'> {
  theme: DefaultTheme;
}
