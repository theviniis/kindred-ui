import React from 'react';
import { ThemeProvider } from 'styled-components';
import { themes, typography } from '../../../shared';
import { Flex } from '../../atoms';
import * as S from './Typography.styles';

const inner_text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';

const Template = ({ theme = 'light' }: { theme: 'light' | 'dark' }) => {
  return (
    <ThemeProvider theme={themes[theme]}>
      <S.Wrapper>
        {S.TYPOGRAPHY_VARIANTS_LIST.map(key => (
          <Flex alignItems="center" gap="md" key={key}>
            <S.InfoContainer>
              <S.Title>{key}</S.Title>
              <S.InfoItem>
                font-size: {typography.typesystem[key].fontSize}px
              </S.InfoItem>
              <S.InfoItem>
                line-height: {typography.typesystem[key].lineHeight}px
              </S.InfoItem>
              <S.InfoItem>
                weight: {typography.typesystem[key].fontWeight}
              </S.InfoItem>
            </S.InfoContainer>
            <S.SampleText className={key}>{inner_text}</S.SampleText>
          </Flex>
        ))}
      </S.Wrapper>
    </ThemeProvider>
  );
};

export const Typesystem = Template.bind({});
