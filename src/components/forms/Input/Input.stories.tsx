import React, { useState } from 'react';
import { Story } from '@storybook/react';
import { Input, InputProps, SizesProps, SkinsProps } from './';
import { Flex, Icon } from '../../';
import { SKIN_PROPS } from '../../../utils';
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
  let skins_list: SKIN_PROPS[] = [];
  const { colors } = useTheme();
  Object.entries(colors).map(([key, value]) => {
    if (typeof value === 'object') skins_list.push(key as SKIN_PROPS);
  });
  return (
    <Flex gap="xs" wrap="wrap">
      {skins_list.map(skin => (
        <Input {...args} key={skin} skin={skin} label={skin} />
      ))}
    </Flex>
  );
};

const SizesTemplate: Story<InputProps> = args => {
  const [value, setValue] = useState('');

  const inputSizes: SizesProps[] = ['sm', 'md', 'lg'];

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

export const Placeholder = Template.bind({});
Placeholder.args = {
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
  placeholder: 'Type something...',
};

export const StartIcon = Template.bind({});
StartIcon.args = {
  startIcon: <Icon onClick={() => console.log('start icon')} />,
  placeholder: 'Type something...',
};

export const EndIcon = Template.bind({});
EndIcon.args = {
  endIcon: <Icon onClick={() => console.log('end icon')} />,
  placeholder: 'Type something...',
};

export const Disabled = Template.bind({});
Disabled.args = {
  placeholder: 'disabled',
  disabled: true,
};
