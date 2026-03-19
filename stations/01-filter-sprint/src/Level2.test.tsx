import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Level2 from './Level2';

describe('Station: 01-filter-sprint - Level 2', () => {
  it('filters the list based on search input', () => {
    render(<Level2 />);
    const input = screen.getByPlaceholderText('Search users...');
    
    fireEvent.change(input, { target: { value: 'al' } });
    
    expect(screen.getByText('Alice')).toBeInTheDocument();
    expect(screen.queryByText('Bob')).not.toBeInTheDocument();
    expect(screen.queryByText('Charlie')).not.toBeInTheDocument();
  });

  it('filters the list case-insensitively', () => {
    render(<Level2 />);
    const input = screen.getByPlaceholderText('Search users...');
    
    fireEvent.change(input, { target: { value: 'AL' } });
    
    expect(screen.getByText('Alice')).toBeInTheDocument();
  });
});
