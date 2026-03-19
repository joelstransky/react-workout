import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Level2 from './Level2';

describe('Station: 05-context-theme - Level 2', () => {
  it('provides theme via ThemeProvider and useTheme hook', () => {
    render(<Level2 />);
    const themeDisplay = screen.getByTestId('theme-value');
    expect(themeDisplay.textContent).toBe('Theme: light');
  });
});
