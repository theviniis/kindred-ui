import React from 'react';
import { Story } from '@storybook/react';
import { TOAST } from './';
import { Button } from '../atoms';
import { useToast } from './ToastProvider';

const Template: Story<TOAST> = ({ title, message }) => {
  const { send } = useToast();
  return (
    <div>
      <Button onClick={() => send({ title, message })}>send toast</Button>
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {
  title: 'Toast',
  message: 'This is a message',
};
