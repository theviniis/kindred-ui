import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Colors, ColorsProps } from '../../src/components';

export default {
  title: 'Tokens/Colors',
  component: Colors,
  parameters: {
    docs: {
      source: {
        type: 'code',
        language: 'tsx',
      },
      description: {
        component: ``,
      },
    },
  },
} as Meta;

const Template: Story<ColorsProps> = ({ children, ...args }) => (
  <Colors {...args}>{children}</Colors>
);

export const Default = Template.bind({});
