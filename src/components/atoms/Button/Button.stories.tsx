import React from 'react';
import { Story } from '@storybook/react';
import { Button, ButtonProps } from '.';
import { useTheme } from 'styled-components';
import { SIZES, SKINS } from '../../../utils';
import { Flex } from '../Flex';

const Template: Story<ButtonProps> = args => (
  <Button {...args}>{args.children}</Button>
);

const SkinsTemplate: Story<ButtonProps> = args => {
  let skins_list: SKINS[] = [];
  const { colors } = useTheme();
  Object.entries(colors).map(([key, value]) => {
    if (typeof value === 'object') skins_list.push(key as SKINS);
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

const SizesTemplate: Story<ButtonProps> = args => {
  const sizes_list: SIZES[] = ['sm', 'md', 'lg'];
  return (
    <Flex gap="xs" wrap="wrap">
      {sizes_list.map(size => (
        <Button {...args} key={size} size={size}>
          {size}
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

const Variant: Story<ButtonProps> = Template.bind({});
Variant.args = {
  children: 'Variant',
  variant: 'outlined',
};

const Size: Story<ButtonProps> = SizesTemplate.bind({});

const Disabled: Story<ButtonProps> = Template.bind({});
Disabled.args = {
  children: 'Disabled',
  disabled: true,
};

export { Default, Skin, Variant, Size, Disabled };
