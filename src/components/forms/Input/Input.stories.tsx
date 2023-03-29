import React, { useState } from 'react';
import { Story } from '@storybook/react';
import { Input, InputProps } from './';
import { Flex, Icon } from '../../';
import { SKINS } from '../../../utils';
import { useTheme } from 'styled-components';

const Template: Story<InputProps> = args => {
  const [value, setValue] = useState('');
  return (
    <Input
      {...args}
      value={value}
      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
        setValue(e.target.value)
      }
    />
  );
};

const SkinsTemplate: Story<InputProps> = args => {
  const [value, setValue] = useState('');
  let skins_list: SKINS[] = [];
  const { colors } = useTheme();
  Object.keys(colors.coreColors).map(color => skins_list.push(color as SKINS));
  return (
    <Flex gap="xs" wrap="wrap">
      {skins_list.map(skin => (
        <Input
          {...args}
          key={skin}
          skin={skin}
          label={skin.charAt(0).toUpperCase() + skin.slice(1)}
          value={value}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setValue(e.target.value)
          }
        />
      ))}
    </Flex>
  );
};

const SizesTemplate: Story<InputProps> = args => {
  const [value, setValue] = useState('');
  const inputSizes = ['sm', 'md', 'lg'] as const;
  return (
    <Flex wrap="wrap" gap="xs">
      {inputSizes.map(size => (
        <Input
          {...args}
          key={size}
          size={size}
          label={size}
          value={value}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setValue(e.target.value)
          }
        />
      ))}
    </Flex>
  );
};

export const Default = Template.bind({});

Default.args = {};

export const Placeholder = Template.bind({});
Placeholder.args = {
  label: 'Label',
  placeholder: 'Type something',
};

export const Label = Template.bind({});
Label.args = {
  label: 'Label',
  placeholder: 'Type something...',
};

export const Skin = SkinsTemplate.bind({});

export const Sizes = SizesTemplate.bind({});

export const SupportingText = Template.bind({});
SupportingText.args = {
  supportingText: 'supporting text',
  label: 'Label',
};

export const StartIcon = Template.bind({});
StartIcon.args = {
  startIcon: <Icon icon="FiEye" onClick={() => console.log('start icon')} />,
  label: 'Label',
};

export const EndIcon = Template.bind({});
EndIcon.args = {
  endIcon: <Icon icon="FiEye" onClick={() => console.log('end icon')} />,
  label: 'Label',
};

export const Error = Template.bind({});
Error.args = {
  label: 'Error',
  hasError: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: 'disabled',
  disabled: true,
};
