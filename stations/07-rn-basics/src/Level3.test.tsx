import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import Level3 from './Level3';
import { Alert } from 'react-native';

// Mock Alert
vi.spyOn(Alert, 'alert').mockImplementation(() => {});

describe('Station: 07-rn-basics - Level 3', () => {
  it('toggles state and updates text when pressed', () => {
    render(<Level3 />);
    
    const button = screen.getByTestID('toggle-button');
    const status = screen.getByTestID('status-text');

    expect(status.textContent).toContain('Inactive');
    expect(button.textContent).toContain('OFF');

    fireEvent.click(button);

    expect(status.textContent).toContain('Active');
    expect(button.textContent).toContain('ON');
    expect(Alert.alert).toHaveBeenCalledWith('Pressed!', 'You toggled the state.');
  });
});
