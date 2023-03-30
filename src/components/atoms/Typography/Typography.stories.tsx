import React from 'react';
import { Story } from '@storybook/react';
import { Typography as Type, TypographyProps } from './index';

const sample_text = 'Lorem ipsum dolor sit amet consectetur adipisicing elit.';

const Template: Story<TypographyProps> = args => (
  <Type {...args}>{sample_text}</Type>
);

export const Typography = Template.bind({});

Typography.args = {};
