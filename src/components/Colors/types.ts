export type COLOR_OBJECT = {
  key: string;
  hex: { color: string; fontColor: string };
};

export interface ColorProps {
  colorList: COLOR_OBJECT[];
  colorName: string;
  expandable?: boolean;
}
