import React, { ReactNode } from 'react';
import { SKINS } from '../../utils';

export type TOAST_OPTIONS = {
  autoClose?: boolean;
  isDismissible?: boolean;
};

export interface ToastContextProps {
  toastList: TOAST[];
  setToastList: React.Dispatch<React.SetStateAction<TOAST[]>>;
  send: (toast: TOAST) => void;
  options?: TOAST_OPTIONS;
  setToastOptions: React.Dispatch<React.SetStateAction<TOAST_OPTIONS>>;
}

export type TOAST = {
  id?: string;
  title: string;
  message: string;
  skin?: SKINS;
  icon?: ReactNode;
};
