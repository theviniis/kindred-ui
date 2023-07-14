import React, {
  ReactNode,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import ReactDOM from 'react-dom';
import * as T from './Toast.types';
import * as S from './Toast.styles';
import { Toast } from './Toast';
import { merge } from 'lodash-es';

const DEFAULT_TOAST_PROVIDER_OPTIONS = {
  autoClose: true,
  isDismissible: true,
  autoCloseTime: 2000,
};

export const ToastContext = React.createContext<T.ToastContextProps>({
  toastList: [],
  setToastList: () => {},
  options: DEFAULT_TOAST_PROVIDER_OPTIONS,
  setOptions: () => {},
  send: () => {},
  remove: () => {},
});

export function ToastProvider({
  children,
}: {
  children: ReactNode;
}): JSX.Element {
  const [toastList, setToastList] = useState<T.TOAST[]>([]);
  const [options, setOptions] = useState<T.TOAST_OPTIONS>(
    DEFAULT_TOAST_PROVIDER_OPTIONS
  );

  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const send = useCallback((toast: T.TOAST) => {
    const id = toast.id ?? crypto.randomUUID();
    setToastList(currentList => [...currentList, { ...toast, id }]);
  }, []);

  const remove = useCallback((id: string) => {
    setToastList(currentList => {
      return currentList.filter(toast => toast.id !== id);
    });
  }, []);

  const ToastContainer: JSX.Element = (
    <S.ToastContainer id="toast-container">
      {toastList &&
        toastList.map(toast => {
          return <Toast key={crypto.randomUUID()} {...toast} />;
        })}
    </S.ToastContainer>
  );

  const ToastWrapperInBody = ReactDOM.createPortal(
    ToastContainer,
    document.body
  );

  useEffect(
    function autoClose() {
      if (toastList.length && options.autoClose) {
        const expiredToast = toastList[toastList.length - 1].id;
        timeoutRef.current = setTimeout(() => {
          setToastList(currentList => {
            return currentList.filter(toast => toast.id !== expiredToast);
          });
        }, options.autoCloseTime);
      }
    },
    [toastList, options.autoClose, options.autoCloseTime]
  );

  return (
    <ToastContext.Provider
      value={{
        toastList,
        setToastList,
        send,
        options,
        setOptions,
        remove,
      }}
    >
      {children}
      {ToastWrapperInBody}
    </ToastContext.Provider>
  );
}

export const useToast = (options?: T.TOAST_OPTIONS): T.ToastContextProps => {
  const context = React.useContext(ToastContext);
  useEffect(() => {
    context.setOptions(currentOptions => merge(currentOptions, options));
  });
  return context;
};
