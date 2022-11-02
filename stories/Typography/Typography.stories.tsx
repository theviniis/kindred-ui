import React from 'react';
import { Story } from '@storybook/react';
import { Typography } from '../../src/components';

const Template: Story = args => <Typography {...args}>what?</Typography>;

export const Default = Template.bind({});
