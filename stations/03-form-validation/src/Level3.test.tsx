import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Level3 from './Level3';

describe('Station: 03-form-validation - Level 3', () => {
  it('disables submit button if invalid', () => {
    render(<Level3 />);
    const submitBtn = screen.getByText('Submit');
    expect(submitBtn).toBeDisabled();
    
    const nameInput = screen.getByPlaceholderText('Name');
    const emailInput = screen.getByPlaceholderText('Email');
    
    fireEvent.change(nameInput, { target: { value: 'Alice' } });
    fireEvent.change(emailInput, { target: { value: 'alice@example.com' } });
    
    expect(submitBtn).not.toBeDisabled();
  });

  it('shows errors in real-time', () => {
    render(<Level3 />);
    expect(screen.getByText('Name is required')).toBeInTheDocument();
    
    const nameInput = screen.getByPlaceholderText('Name');
    fireEvent.change(nameInput, { target: { value: 'Alice' } });
    
    expect(screen.queryByText('Name is required')).not.toBeInTheDocument();
  });
});
