import { render, screen } from '@testing-library/react';
import CustomHook from './App';
import { describe, it, expect } from 'vitest';

describe('Station 6: Custom Hook', () => {
  it('renders without crashing', () => {
    render(<CustomHook />);
    expect(screen.getByText(/Station 06/i)).toBeInTheDocument();
  });
});
