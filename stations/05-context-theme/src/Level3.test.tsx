import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import Level3 from './Level3';

describe('Station: 05-context-theme - Level 3', () => {
  it('toggles theme and updates styles', () => {
    render(<Level3 />);
    const container = screen.getByTestId('theme-container');
    const toggleButton = screen.getByText('Toggle Theme');

    // Light theme (initial)
    expect(container.style.backgroundColor).toBe('rgb(255, 255, 255)');
    expect(container.style.color).toBe('rgb(0, 0, 0)');
    expect(screen.getByText('Current Theme: light')).toBeDefined();

    // Toggle to dark
    fireEvent.click(toggleButton);
    expect(container.style.backgroundColor).toBe('rgb(51, 51, 51)');
    expect(container.style.color).toBe('rgb(255, 255, 255)');
    expect(screen.getByText('Current Theme: dark')).toBeDefined();

    // Toggle back to light
    fireEvent.click(toggleButton);
    expect(container.style.backgroundColor).toBe('rgb(255, 255, 255)');
  });
});
