import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, beforeEach } from 'vitest';
import Level1 from './Level1';

describe('Station: 06-custom-hook - Level 1', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('renders with default "Stranger" when localStorage is empty', () => {
    render(<Level1 />);
    expect(screen.getByText('Hello, Stranger!')).toBeInTheDocument();
  });

  it('loads initial name from localStorage', () => {
    localStorage.setItem('workout_name', 'Coach');
    render(<Level1 />);
    expect(screen.getByText('Hello, Coach!')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Enter your name')).toHaveValue('Coach');
  });

  it('saves name to localStorage when input changes', () => {
    render(<Level1 />);
    const input = screen.getByPlaceholderText('Enter your name');
    
    fireEvent.change(input, { target: { value: 'Ironman' } });
    
    expect(screen.getByText('Hello, Ironman!')).toBeInTheDocument();
    expect(localStorage.getItem('workout_name')).toBe('Ironman');
  });
});
