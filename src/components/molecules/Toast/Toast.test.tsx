import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { render, screen } from '@testing-library/react';
import { Toast } from './Toast';

const testId = 'Toast-test-id';
const TOAST = {
  message: 'lorem',
};

describe('Toast tests', () => {
  test('Test if Toast component renders correctly', () => {
    render(<Toast data-testid={testId} {...TOAST} />);
    const element = screen.getByTestId(testId);
    expect(element).toBeInTheDocument();
  });
});
