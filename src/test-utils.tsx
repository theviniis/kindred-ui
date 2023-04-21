import React, { ReactElement } from 'react';
import { render, RenderOptions, RenderResult } from '@testing-library/react';
import { KindredContext } from '../src/context';

const AllTheProviders = ({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element => {
  return <KindredContext scheme="light">{children}</KindredContext>;
};

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>
): RenderResult => render(ui, { wrapper: AllTheProviders, ...options });

export * from '@testing-library/react';
export { customRender as render };
