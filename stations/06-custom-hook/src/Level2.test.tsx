import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, beforeEach } from 'vitest';
import Level2 from './Level2';

describe('Station: 06-custom-hook - Level 2', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('renders with initial value when localStorage is empty', () => {
    render(<Level2 />);
    expect(screen.getByText('Keep pushing, Athlete!')).toBeInTheDocument();
  });

  it('loads initial value from localStorage', () => {
    localStorage.setItem('workout_hook_name', 'Champ');
    render(<Level2 />);
    expect(screen.getByText('Keep pushing, Champ!')).toBeInTheDocument();
  });

  it('saves value to localStorage when input changes', () => {
    render(<Level2 />);
    const input = screen.getByPlaceholderText('Enter athlete name');
    
    fireEvent.change(input, { target: { value: 'Winner' } });
    
    expect(screen.getByText('Keep pushing, Winner!')).toBeInTheDocument();
    expect(localStorage.getItem('workout_hook_name')).toBe('Winner');
  });
});
