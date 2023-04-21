import React, { useContext } from 'react';
import * as S from './Toast.styles';
import { Icon, Typography } from '../../';
import { ToastContext, TOAST } from './';

export const Toast = ({
  id = crypto.randomUUID(),
  message,
  skin = 'neutral',
}: TOAST): JSX.Element => {
  const { remove, options } = useContext(ToastContext);
  return (
    <S.Toast key={id}>
      <Typography type="body">{message}</Typography>
      {options.isDismissible && (
        <S.Button size="sm" skin={skin} onClick={(): void => remove(id)}>
          <Icon icon="remove" size="sm" />
        </S.Button>
      )}
    </S.Toast>
  );
};
