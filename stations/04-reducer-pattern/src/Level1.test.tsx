import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import Level1 from './Level1';

describe('Station: 04-reducer-pattern - Level 1', () => {
  it('increments count when increment button is clicked', () => {
    render(<Level1 />);
    const count = screen.getByTestId('count');
    const incrementBtn = screen.getByText('Increment');
    
    expect(count.textContent).toBe('Count: 0');
    fireEvent.click(incrementBtn);
    expect(count.textContent).toBe('Count: 1');
  });

  it('decrements count when decrement button is clicked', () => {
    render(<Level1 />);
    const count = screen.getByTestId('count');
    const decrementBtn = screen.getByText('Decrement');
    
    expect(count.textContent).toBe('Count: 0');
    fireEvent.click(decrementBtn);
    expect(count.textContent).toBe('Count: -1');
  });

  it('resets count when reset button is clicked', () => {
    render(<Level1 />);
    const count = screen.getByTestId('count');
    const incrementBtn = screen.getByText('Increment');
    const resetBtn = screen.getByText('Reset');
    
    fireEvent.click(incrementBtn);
    fireEvent.click(incrementBtn);
    expect(count.textContent).toBe('Count: 2');
    
    fireEvent.click(resetBtn);
    expect(count.textContent).toBe('Count: 0');
  });
});
