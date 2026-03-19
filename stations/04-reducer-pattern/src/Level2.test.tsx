import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import Level2 from './Level2';

describe('Station: 04-reducer-pattern - Level 2', () => {
  it('adds an item to the list', () => {
    render(<Level2 />);
    const input = screen.getByPlaceholderText('Add item...');
    const addButton = screen.getByText('Add Item');

    fireEvent.change(input, { target: { value: 'Milk' } });
    fireEvent.click(addButton);

    expect(screen.getByText('Milk')).toBeDefined();
    expect(input.getAttribute('value')).toBe('');
  });

  it('removes an item from the list', () => {
    render(<Level2 />);
    const input = screen.getByPlaceholderText('Add item...');
    const addButton = screen.getByText('Add Item');

    fireEvent.change(input, { target: { value: 'Eggs' } });
    fireEvent.click(addButton);
    
    const removeButton = screen.getByText('Remove');
    fireEvent.click(removeButton);

    expect(screen.queryByText('Eggs')).toBeNull();
  });
});
