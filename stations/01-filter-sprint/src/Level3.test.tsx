import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Level3 from './Level3';

describe('Station: 01-filter-sprint - Level 3', () => {
  it('shows "No users found" when no matches', () => {
    render(<Level3 />);
    const input = screen.getByPlaceholderText('Search users...');
    
    fireEvent.change(input, { target: { value: 'Zzzz' } });
    
    expect(screen.getByText('No users found')).toBeInTheDocument();
  });

  it('clears the search input when "Clear Search" is clicked', () => {
    render(<Level3 />);
    const input = screen.getByPlaceholderText('Search users...');
    const clearBtn = screen.getByText('Clear Search');
    
    fireEvent.change(input, { target: { value: 'Alice' } });
    expect(input.value).toBe('Alice');
    
    fireEvent.click(clearBtn);
    expect(input.value).toBe('');
    expect(screen.getByText('Bob')).toBeInTheDocument();
  });
});
