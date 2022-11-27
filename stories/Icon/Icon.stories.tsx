import React, { useState } from 'react';
import { Story } from '@storybook/react';
import { Icon, IconProps } from '../../src/components';
import { colors } from '../../src/shared';

const icon = 'checkSquare';

const Template: Story<IconProps> = args => <Icon {...args} icon={icon} />;

const ToggleTemplate: Story<IconProps> = args => {
  const [isActive, setIsActive] = useState<boolean>(false);

  return (
    <Icon
      {...args}
      icon={icon}
      variant={isActive ? 'fill' : 'stroke'}
      onClick={() => setIsActive(!isActive)}
    />
  );
};

const Default: Story<IconProps> = Template.bind({});

const Variant: Story<IconProps> = Template.bind({});
Variant.args = {
  variant: 'fill',
};

const Skin: Story<IconProps> = Template.bind({});
Skin.args = {
  skin: colors.primary[100].color,
};

const Size: Story<IconProps> = Template.bind({});
Size.args = {
  size: 'large',
};

const Toggle: Story<IconProps> = ToggleTemplate.bind({});

export { Default, Variant, Skin, Size, Toggle };
