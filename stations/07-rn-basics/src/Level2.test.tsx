import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Level2 from './Level2';

describe('Station: 07-rn-basics - Level 2', () => {
  it('renders a list of users using FlatList', () => {
    render(<Level2 />);
    
    expect(screen.getByText('Alice')).toBeTruthy();
    expect(screen.getByText('Bob')).toBeTruthy();
    expect(screen.getByText('Charlie')).toBeTruthy();
  });

  it('renders the correct number of items', () => {
    render(<Level2 />);
    const items = screen.getAllByTestID('user-item');
    expect(items.length).toBe(3);
  });
});
