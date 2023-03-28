import React, { ReactElement } from 'react';
import { render, RenderOptions } from '@testing-library/react';
import { KindredContext } from '../context';

const AllTheProviders = ({ children }: { children: React.ReactNode }) => {
  return <KindredContext scheme="light">{children}</KindredContext>;
};

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>
) => render(ui, { wrapper: AllTheProviders, ...options });

export * from '@testing-library/react';
export { customRender as render };
