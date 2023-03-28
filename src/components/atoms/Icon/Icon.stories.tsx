import React from 'react';
import { Story } from '@storybook/react';
import { Icon } from './Icon';
import { IconProps } from './Icon.types';

const Template: Story<IconProps> = args => <Icon {...args} />;

export const Default: Story<IconProps> = Template.bind({});

Default.args = {
  icon: 'FiEye',
};

export const Skin: Story<IconProps> = Template.bind({});

Skin.args = {
  icon: 'FiEye',
  skin: 'pink',
};

export const Size: Story<IconProps> = Template.bind({});

Size.args = {
  icon: 'FiEye',
  size: 'xxxlg',
};
