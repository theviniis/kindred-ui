import React, { ReactNode, useCallback, useState } from 'react';
import ReactDOM from 'react-dom';
import * as T from './Toast.types';
import * as S from './Toast.styles';
import { Typography } from '../atoms';

export const ToastContext = React.createContext<T.ToastContextProps>({
  toastList: [],
  setToastList: () => {},
  send: () => {},
  options: {
    autoClose: true,
    isDismissible: true,
  },
  setToastOptions: () => {},
});

export function ToastProvider({
  children,
}: {
  children: ReactNode;
}): JSX.Element {
  const [toastList, setToastList] = useState<T.TOAST[]>([]);
  const [options, setOptions] = useState<T.TOAST_OPTIONS>({});

  const ToastContainer: JSX.Element = (
    <S.ToastContainer id="toast-container">
      {toastList.map(toast => (
        <S.Toast key={toast.id ?? crypto.randomUUID()}>
          <Typography type="title">{toast.title}</Typography>
          <Typography type="body">{toast.message}</Typography>
        </S.Toast>
      ))}
    </S.ToastContainer>
  );

  const send = useCallback((toast: T.TOAST) => {
    setToastList(currentList => [...currentList, toast]);
  }, []);

  const ToastWrapperInBody = ReactDOM.createPortal(
    ToastContainer,
    document.body
  );

  return (
    <ToastContext.Provider
      value={{
        toastList,
        setToastList,
        send,
        options,
        setToastOptions: setOptions,
      }}
    >
      {children}
      {ToastWrapperInBody}
    </ToastContext.Provider>
  );
}

export const useToast = (): T.ToastContextProps =>
  React.useContext(ToastContext);
