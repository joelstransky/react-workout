import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Level1 from './Level1';

describe('Station: 01-filter-sprint - Level 1', () => {
  it('renders the initial list of users', () => {
    render(<Level1 />);
    expect(screen.getByText('Alice')).toBeInTheDocument();
    expect(screen.getByText('Bob')).toBeInTheDocument();
    expect(screen.getByText('Charlie')).toBeInTheDocument();
  });
});
