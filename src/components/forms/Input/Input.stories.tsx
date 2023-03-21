import React, { useState } from 'react';
import { Story } from '@storybook/react';
import { Input, InputProps, InputSkinsProps } from './';
import { Flex, Icon } from '../../';

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

  const inputSkins: InputSkinsProps[] = [
    'neutral',
    'primary',
    'secondary',
    'success',
    'error',
  ];
  return (
    <Flex wrap="wrap">
      {inputSkins.map(skin => (
        <Input
          {...args}
          key={skin}
          skin={skin}
          label={skin}
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

export const inputSize = Template.bind({});
inputSize.args = {
  size: 'sm',
  placeholder: 'Type something...',
};

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
