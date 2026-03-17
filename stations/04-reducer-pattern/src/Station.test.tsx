import { render, screen } from '@testing-library/react';
import ReducerPattern from './App';
import { describe, it, expect } from 'vitest';

describe('Station 4: Reducer Pattern', () => {
  it('renders without crashing', () => {
    render(<ReducerPattern />);
    expect(screen.getByText(/Station 04/i)).toBeInTheDocument();
  });
});
