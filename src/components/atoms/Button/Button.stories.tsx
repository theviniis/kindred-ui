import React from 'react';
import { Story } from '@storybook/react';
import { Button, ButtonProps } from '.';

const Template: Story<ButtonProps> = args => <Button {...args}></Button>;

const Default: Story<ButtonProps> = Template.bind({});
Default.args = {
  children: 'Default',
};

const Skin: Story<ButtonProps> = Template.bind({});
Skin.args = {
  children: 'Skin',
  skin: 'secondary',
};

const Variant: Story<ButtonProps> = Template.bind({});
Variant.args = {
  children: 'Variant',
  variant: 'stroke',
};

const Size: Story<ButtonProps> = Template.bind({});
Size.args = {
  children: 'small',
  size: 'sm',
};

const Disabled: Story<ButtonProps> = Template.bind({});
Disabled.args = {
  children: 'Disabled',
  disabled: true,
};

export { Default, Skin, Variant, Size, Disabled };
