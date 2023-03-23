import React from 'react';
import { Story } from '@storybook/react';
import { Button, ButtonProps } from '.';
import { useTheme } from 'styled-components';
import { SKIN_PROPS } from '../../../utils';
import { Flex } from '../Flex';

const Template: Story<ButtonProps> = args => (
  <Button {...args}>{args.children}</Button>
);

const SkinsTemplate: Story<ButtonProps> = args => {
  let skins_list: SKIN_PROPS[] = [];
  const { colors } = useTheme();
  Object.entries(colors).map(([key, value]) => {
    if (typeof value === 'object') skins_list.push(key as SKIN_PROPS);
  });
  return (
    <Flex gap="xs" wrap="wrap">
      {skins_list.map(skin => (
        <Button {...args} key={skin} skin={skin}>
          {skin}
        </Button>
      ))}
    </Flex>
  );
};

const Default: Story<ButtonProps> = Template.bind({});
Default.args = {
  children: 'Default',
};

const Skin: Story<ButtonProps> = SkinsTemplate.bind({});
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
