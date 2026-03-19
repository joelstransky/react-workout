import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Level2 from './Level2';

describe('Station: 03-form-validation - Level 2', () => {
  it('shows error messages on invalid submit', () => {
    render(<Level2 />);
    const submitBtn = screen.getByText('Submit');
    
    fireEvent.click(submitBtn);
    
    expect(screen.getByText('Name is required')).toBeInTheDocument();
    expect(screen.getByText('Invalid email')).toBeInTheDocument();
  });

  it('clears errors on valid input and submit', () => {
    render(<Level2 />);
    const nameInput = screen.getByPlaceholderText('Name');
    const emailInput = screen.getByPlaceholderText('Email');
    const submitBtn = screen.getByText('Submit');
    
    fireEvent.change(nameInput, { target: { value: 'Alice' } });
    fireEvent.change(emailInput, { target: { value: 'alice@example.com' } });
    fireEvent.click(submitBtn);
    
    expect(screen.queryByText('Name is required')).not.toBeInTheDocument();
    expect(screen.queryByText('Invalid email')).not.toBeInTheDocument();
  });
});
