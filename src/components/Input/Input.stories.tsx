import React from 'react';
import { Story } from '@storybook/react';
import { Input, InputProps } from './';

const Template: Story<InputProps> = args => <Input {...args} />;

export const Default = Template.bind({});
