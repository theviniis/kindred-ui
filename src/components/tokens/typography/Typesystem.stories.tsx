import React from 'react';
import { ThemeProvider } from 'styled-components';
import { themes, typesystem } from '../../../shared';
import { Typography } from '../../atoms';
import * as S from './Typesystem.styles';

const inner_text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';

const Template = ({ theme = 'light' }: { theme: 'light' | 'dark' }) => {
  const { list } = convertTypesystemToArray<typeof typesystem>(typesystem);

  return (
    <ThemeProvider theme={themes[theme]}>
      <S.Wrapper>
        {list.map(item => {
          return (
            <S.Container>
              <S.InfoContainer>
                <Typography type="title" size="md">
                  {item.type}
                </Typography>
                <span>size: {item.size};</span>
                <span>font-size: {item.fontSize}px;</span>
                <span>line-height: {item.lineHeight}px;</span>
                <span>font-weight: {item.weight};</span>
              </S.InfoContainer>
              <S.Typography
                type={item.type}
                size={item.size}
                forwardedAs={item.element}
              >
                {inner_text}
              </S.Typography>
            </S.Container>
          );
        })}
      </S.Wrapper>
    </ThemeProvider>
  );
};

export const Typesystem = Template.bind({});

function convertTypesystemToArray<T>(data: T) {
  const list = [];
  for (const key in data) {
    const nestedObj = data[key];
    for (const nestedKey in nestedObj) {
      const obj = {
        type: key,
        size: nestedKey,
        ...nestedObj[nestedKey],
      };
      list.push(obj);
    }
  }
  return { list };
}
