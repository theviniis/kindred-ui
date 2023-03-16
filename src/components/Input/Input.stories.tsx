import React from 'react';
import { Story } from '@storybook/react';
import { Input, InputProps } from './';
import { Icon } from '../Icon';

const Template: Story<InputProps> = args => <Input {...args} />;

export const Default = Template.bind({});

export const Placeholder = Template.bind({});
Placeholder.args = {
  placeholder: 'placeholder',
};

export const Label = Template.bind({});
Label.args = {
  label: 'label',
  placeholder: 'Type something...',
};

export const Variant = Template.bind({});
Variant.args = {
  variant: 'outlined',
  placeholder: 'Type something...',
};

export const Skin = Template.bind({});
Skin.args = {
  skin: 'neutral',
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

export const Error = Template.bind({});
Error.args = {
  error: true,
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
