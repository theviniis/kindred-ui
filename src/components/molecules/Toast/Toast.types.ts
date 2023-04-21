import React, { ReactNode } from 'react';
import { SKINS } from '../../../utils';

export type TOAST_OPTIONS = {
  autoClose?: boolean;
  isDismissible?: boolean;
  autoCloseTime?: number;
};

export interface ToastContextProps {
  toastList: TOAST[];
  setToastList: React.Dispatch<React.SetStateAction<TOAST[]>>;
  options: TOAST_OPTIONS;
  setOptions: React.Dispatch<React.SetStateAction<TOAST_OPTIONS>>;
  send: (toast: TOAST) => void;
  remove: (id: string) => void;
}

export type TOAST = {
  id?: string;
  message: string;
  skin?: SKINS;
  icon?: ReactNode;
};
