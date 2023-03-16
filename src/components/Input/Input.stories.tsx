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
};

export const Variant = Template.bind({});
Variant.args = {
  variant: 'outlined',
};

export const Skin = Template.bind({});
Skin.args = {
  skin: 'neutral',
};

export const Size = Template.bind({});
Size.args = {
  size: 'sm',
};

export const SupportingText = Template.bind({});
SupportingText.args = {
  supportingText: 'supporting text',
};

export const Error = Template.bind({});
Error.args = {
  error: true,
};

export const StartIcon = Template.bind({});
StartIcon.args = {
  startIcon: <Icon />,
};

export const EndIcon = Template.bind({});
EndIcon.args = {
  endIcon: <Icon />,
};
