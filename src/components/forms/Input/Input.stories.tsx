import React from 'react';
import { Story } from '@storybook/react';
import { Input, InputProps, InputSkinsProps, InputVariantsProps } from './';
import { Flex, Icon } from '../../';

const Template: Story<InputProps> = args => <Input {...args} />;

const SkinsTemplate: Story<InputProps> = args => {
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
        <Input {...args} skin={skin} label={skin} />
      ))}
    </Flex>
  );
};

const VariantsTemplate: Story<InputProps> = args => {
  const variants: InputVariantsProps[] = ['plain', 'outlined', 'soft', 'solid'];
  return (
    <Flex wrap="wrap">
      {variants.map(variant => (
        <Input {...args} variant={variant} placeholder={variant} />
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

export const Variant = VariantsTemplate.bind({});

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
  startHelper: <Icon />,
  placeholder: 'Type something...',
};

export const EndIcon = Template.bind({});
EndIcon.args = {
  endHelper: <Icon />,
  placeholder: 'Type something...',
};
