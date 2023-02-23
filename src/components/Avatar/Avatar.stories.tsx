import React from 'react';
import { Story } from '@storybook/react';
import { Avatar, AvatarProps } from '.';

const Template: Story<AvatarProps> = args => <Avatar {...args}></Avatar>;

export const Default = Template.bind({});

Default.args = {
  src:
    'https://images.unsplash.com/photo-1674925271384-fc642a6ba682?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY3NzA5ODMyMA&ixlib=rb-4.0.3&q=80&w=1080',
};
