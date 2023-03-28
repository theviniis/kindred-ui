import { spacing } from '../../../shared';
import { SKINS } from '../../../utils';

export type ICONS_VARIANTS = 'FiEye' | 'FiEyeOff' | 'FiAlertTriangle';
export interface IconProps extends React.SVGAttributes<HTMLOrSVGElement> {
  icon: ICONS_VARIANTS;
  skin?: SKINS;
  size?: keyof typeof spacing;
  title?: string;
}
