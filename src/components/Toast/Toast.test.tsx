import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { render, screen } from '@testing-library/react';
import { Toast } from './Toast';

const testId = 'Toast-test-id';

describe('Toast tests', () => {
  test('Test if Toast component renders correctly', () => {
    render(<Toast data-testid={testId} />);
    const element = screen.getByTestId(testId);
    expect(element).toBeInTheDocument();
  });
});
