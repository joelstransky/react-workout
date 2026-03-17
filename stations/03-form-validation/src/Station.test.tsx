import { render, screen } from '@testing-library/react';
import FormValidation from './App';
import { describe, it, expect } from 'vitest';

describe('Station 3: Form Validation', () => {
  it('renders without crashing', () => {
    render(<FormValidation />);
    expect(screen.getByText(/Station 03/i)).toBeInTheDocument();
  });
});
