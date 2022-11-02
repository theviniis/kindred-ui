import React from 'react';
import * as T from './types';
import * as S from './styles';
import { colors } from '../../shared';

let colorsObject = [];

const keys = Object.keys(colors);
keys.map(key => {
  const variants = Object.keys(colors[key]);
  const hex = variants.map(variant => {
    const hex = colors[key][variant];
    return { variant, hex };
  });
  colorsObject = [...colorsObject, { key, variants: hex }];
});

export const Colors: React.FC<T.ColorsProps> = () => {
  return (
    <S.Wrapper>
      {colorsObject.length &&
        colorsObject.map((color, index) => (
          <li>
            <h4>{color.key}</h4>
            <S.List>
              {color.variants &&
                color.variants.map((item, i) => (
                  <S.Content key={i} background={item.hex}>
                    {item.variant}
                  </S.Content>
                ))}
            </S.List>
          </li>
        ))}
    </S.Wrapper>
  );
};
