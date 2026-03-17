import { render, screen, fireEvent } from '@testing-library/react';
import FilterSprint, { USERS } from './App';
import { describe, it, expect } from 'vitest';

describe('Station 1: The Filter Sprint', () => {
  it('renders all users initially', () => {
    render(<FilterSprint />);
    USERS.forEach(user => {
      expect(screen.getByText(new RegExp(user, 'i'))).toBeInTheDocument();
    });
  });

  it('filters the list based on search term', () => {
    render(<FilterSprint />);
    const input = screen.getByPlaceholderText(/search/i);
    
    fireEvent.change(input, { target: { value: 'al' } });
    
    expect(screen.getByText(/Alice/i)).toBeInTheDocument();
    expect(screen.queryByText(/Bob/i)).not.toBeInTheDocument();
  });

  it('is case-insensitive', () => {
    render(<FilterSprint />);
    const input = screen.getByPlaceholderText(/search/i);
    
    fireEvent.change(input, { target: { value: 'CHARLIE' } });
    expect(screen.getByText(/Charlie/i)).toBeInTheDocument();
  });

  it('shows "No users found" when no match exists', () => {
    render(<FilterSprint />);
    const input = screen.getByPlaceholderText(/search/i);
    
    fireEvent.change(input, { target: { value: 'xyz123' } });
    expect(screen.getByText(/no users found/i)).toBeInTheDocument();
  });
});
