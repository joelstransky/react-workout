import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import Level3 from './Level3';

describe('Station: 04-reducer-pattern - Level 3', () => {
  it('adds items and updates total price', () => {
    render(<Level3 />);
    const addApple = screen.getByText('Add Apple ($1.5)');
    const addBanana = screen.getByText('Add Banana ($2.0)');
    const totalPrice = screen.getByTestId('total-price');

    fireEvent.click(addApple);
    expect(totalPrice.textContent).toBe('Total: $1.50');

    fireEvent.click(addBanana);
    expect(totalPrice.textContent).toBe('Total: $3.50');

    fireEvent.click(addApple);
    expect(totalPrice.textContent).toBe('Total: $5.00');
  });

  it('updates quantity of an item', () => {
    render(<Level3 />);
    const addApple = screen.getByText('Add Apple ($1.5)');
    fireEvent.click(addApple);
    
    const incrementBtn = screen.getByText('+');
    fireEvent.click(incrementBtn);

    const item = screen.getByTestId('item-1');
    expect(item.textContent).toContain('x 2');
    expect(screen.getByTestId('total-price').textContent).toBe('Total: $3.00');
  });

  it('removes an item entirely', () => {
    render(<Level3 />);
    const addApple = screen.getByText('Add Apple ($1.5)');
    fireEvent.click(addApple);
    
    const removeBtn = screen.getByText('Remove');
    fireEvent.click(removeBtn);

    expect(screen.queryByTestId('item-1')).toBeNull();
    expect(screen.getByTestId('total-price').textContent).toBe('Total: $0.00');
  });
});
