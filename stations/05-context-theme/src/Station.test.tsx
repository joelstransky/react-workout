import { render, screen } from '@testing-library/react';
import ContextTheme from './App';
import { describe, it, expect } from 'vitest';

describe('Station 5: Context Theme', () => {
  it('renders without crashing', () => {
    render(<ContextTheme />);
    expect(screen.getByText(/Station 05/i)).toBeInTheDocument();
  });
});
