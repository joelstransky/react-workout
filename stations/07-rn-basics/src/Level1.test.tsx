import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Level1 from './Level1';

describe('Station: 07-rn-basics - Level 1', () => {
  it('renders title and subtitle', () => {
    render(<Level1 />);
    expect(screen.getByText('Station 07')).toBeTruthy();
    expect(screen.getByText('React Native Basics')).toBeTruthy();
  });
});
