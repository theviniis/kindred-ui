import React from 'react';
import { Story } from '@storybook/react';
import { Button, ButtonProps, BUTTON_VARIANTS } from '.';
import { useTheme } from 'styled-components';
import { SIZES, SKINS } from '../../../utils';
import { Flex } from '../Flex';

const Template: Story<ButtonProps> = args => (
  <Button {...args}>{args.children}</Button>
);

const SkinsTemplate: Story<ButtonProps> = args => {
  let skins_list: SKINS[] = [];
  const { colors } = useTheme();
  Object.keys(colors.coreColors).map(color => skins_list.push(color as SKINS));
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

const VariantsTemplate: Story<ButtonProps> = args => {
  const variants: BUTTON_VARIANTS[] = ['default', 'outlined', 'ghost'];
  return (
    <Flex gap="xs" wrap="wrap">
      {variants.map(variant => (
        <Button {...args} key={variant} variant={variant}>
          {variant}
        </Button>
      ))}
    </Flex>
  );
};

const SizesTemplate: Story<ButtonProps> = args => {
  const sizes_list: SIZES[] = ['xs', 'sm', 'md', 'lg', 'xl'];
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

const Variant: Story<ButtonProps> = VariantsTemplate.bind({});

const Size: Story<ButtonProps> = SizesTemplate.bind({});

export const Loading: Story<ButtonProps> = Template.bind({});
Loading.args = {
  children: 'Loading',
  loading: true,
};

const Disabled: Story<ButtonProps> = Template.bind({});
Disabled.args = {
  children: 'Disabled',
  disabled: true,
};

export { Default, Skin, Variant, Size, Disabled };
