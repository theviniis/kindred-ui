import React from 'react';
import { Story } from '@storybook/react';
import { Loading, LoadingProps } from '.';

const Template: Story<LoadingProps> = args => <Loading {...args} />;

export const Circle = Template.bind({});
Circle.args = {
  type: 'circle',
};

export const Bar = Template.bind({});

Bar.args = {
  type: 'bar',
};
