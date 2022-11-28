import React from 'react';
import { Story } from '@storybook/react';
import { Button, ButtonProps } from '../../src/components';

const icon = 'checkSquare';

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

const Disabled: Story<ButtonProps> = Template.bind({});
Disabled.args = {
  children: 'Disabled',
  disabled: true,
};

const Size: Story<ButtonProps> = Template.bind({});
Size.args = {
  children: 'Size',
  size: 'xsmall',
};

const Icon: Story<ButtonProps> = Template.bind({});
Icon.args = {
  children: 'Icon',
  icon,
};

const IconPosition: Story<ButtonProps> = Template.bind({});
IconPosition.args = {
  children: 'IconPosition',
  icon,
  iconPosition: 'end',
};

export { Default, Skin, Variant, Disabled, Size, Icon, IconPosition };
