import React from 'react';
import { Story } from '@storybook/react';
import { TOAST, useToast } from './';
import { Button } from '../../';

const Template: Story<TOAST> = args => {
  const { send } = useToast();
  return (
    <div>
      <Button onClick={() => send(args)}>send toast</Button>
    </div>
  );
};

export const Default = Template.bind({});

Default.args = {
  message: 'This is a message',
};
