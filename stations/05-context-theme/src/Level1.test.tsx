import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Level1 from './Level1';

describe('Station: 05-context-theme - Level 1', () => {
  it('displays the theme value from context', () => {
    render(<Level1 />);
    const themeDisplay = screen.getByTestId('theme-value');
    expect(themeDisplay.textContent).toBe('Current Theme: light');
  });
});
