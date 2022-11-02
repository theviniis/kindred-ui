import React from 'react';
import { Story } from '@storybook/react';
import { Flex } from '../../src/components';
import * as S from './styles';

const Template: Story = args => (
  <Flex {...args}>
    <S.Content></S.Content>
    <S.Content></S.Content>
    <S.Content></S.Content>
  </Flex>
);

export const Default = Template.bind({});
