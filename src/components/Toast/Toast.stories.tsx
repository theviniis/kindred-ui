import React from 'react';
import { Story } from '@storybook/react';
import { TOAST } from './';
import { Button } from '../atoms';
import { useToast } from './ToastProvider';

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
