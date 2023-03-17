import React from 'react';
import { Story } from '@storybook/react';
import { Input, InputProps } from './';
import { Icon } from '../../';

const Template: Story<InputProps> = args => <Input {...args} />;

export const Default = Template.bind({});

export const Placeholder = Template.bind({});
Placeholder.args = {
  placeholder: 'Type something',
};

export const Label = Template.bind({});
Label.args = {
  label: 'Label',
  placeholder: 'Type something...',
};

export const Variant = Template.bind({});
Variant.args = {
  variant: 'outlined',
  placeholder: 'Type something...',
};

export const Skin = Template.bind({});
Skin.args = {
  skin: 'primary',
  placeholder: 'Type something...',
};

export const inputSize = Template.bind({});
inputSize.args = {
  inputSize: 'sm',
  placeholder: 'Type something...',
};

export const SupportingText = Template.bind({});
SupportingText.args = {
  supportingText: 'supporting text',
  placeholder: 'Type something...',
};

export const StartIcon = Template.bind({});
StartIcon.args = {
  startIcon: <Icon />,
  placeholder: 'Type something...',
};

export const EndIcon = Template.bind({});
EndIcon.args = {
  endIcon: <Icon />,
  placeholder: 'Type something...',
};
