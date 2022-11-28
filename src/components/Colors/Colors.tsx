import React from 'react';
import * as S from './styles';
import * as T from './types';
import { colors } from '../../shared';

const getColorsArray = ({ colorObject }: { colorObject: any }) => {
  const keys = Object.keys(colorObject);
  const obj: T.COLOR_OBJECT[] = [];
  keys.map(k => obj.push({ key: k, hex: colorObject[k] }));
  return obj;
};

const Color: React.FC<T.ColorProps> = ({
  colorList,
  colorName,
  expandable = true,
}) => {
  return (
    <S.Wrapper forwardedAs="div">
      {colorList.map(({ hex, key }) => {
        return (
          <S.Content key={key} background={hex.color} expandable={expandable}>
            <S.ColorKey color={hex.fontColor}>{key}</S.ColorKey>
            <S.ColorPath
              onClick={() => {
                return navigator.clipboard.writeText(
                  `colors.${colorName}[${key}].color`
                );
              }}
            >{`colors.${colorName}[${key}].color`}</S.ColorPath>
          </S.Content>
        );
      })}
    </S.Wrapper>
  );
};

const primaryList = getColorsArray({ colorObject: colors.primary });

const Primary = () => <Color colorName="primary" colorList={primaryList} />;

const secondaryList = getColorsArray({ colorObject: colors.secondary });

const Secondary = () => (
  <Color colorName="secondary" colorList={secondaryList} />
);

const successList = getColorsArray({ colorObject: colors.success });

const Success = () => <Color colorName="success" colorList={successList} />;

const errorList = getColorsArray({ colorObject: colors.error });

const Error = () => <Color colorName="error" colorList={errorList} />;

const neutralList = getColorsArray({ colorObject: colors.neutral });

const Neutral = () => (
  <Color colorName="neutral" colorList={neutralList} expandable={false} />
);

export { Primary, Secondary, Success, Error, Neutral };
