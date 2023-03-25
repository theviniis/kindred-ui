import React from 'react';
import { Story } from '@storybook/react';
import { Typography, TypographyProps } from './index';

const sample_text = 'Lorem ipsum dolor sit amet consectetur adipisicing elit.';

const Template: Story<TypographyProps> = args => (
  <Typography {...args}>{sample_text}</Typography>
);

export const Default = Template.bind({});

Default.args = {
  as: 'span',
};
