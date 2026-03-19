import { render, screen, fireEvent, act } from '@testing-library/react';
import { describe, it, expect, beforeEach } from 'vitest';
import Level3 from './Level3';

describe('Station: 06-custom-hook - Level 3', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('handles objects in localStorage', () => {
    const initialSettings = { sound: false, difficulty: 'easy' };
    localStorage.setItem('workout_settings', JSON.stringify(initialSettings));
    
    render(<Level3 />);
    
    expect(screen.getByLabelText('Sound Enabled')).not.toBeChecked();
    expect(screen.getByText('Status: Off')).toBeInTheDocument();
    expect(screen.getByLabelText('Difficulty Level')).toHaveValue('easy');
  });

  it('saves objects to localStorage when state changes', () => {
    render(<Level3 />);
    
    const checkbox = screen.getByLabelText('Sound Enabled');
    fireEvent.click(checkbox);
    
    const settings = JSON.parse(localStorage.getItem('workout_settings') || '{}');
    // Default was sound: true, so clicking it should make it false if it was true, but wait.
    // In Level3.tsx initial value is { sound: true, difficulty: 'hard' }
    // So if I click it, it should become false.
    expect(settings.sound).toBe(false);
  });

  it('updates state when storage event occurs (cross-tab sync)', () => {
    render(<Level3 />);
    
    const newSettings = { sound: false, difficulty: 'medium' };
    
    act(() => {
      window.dispatchEvent(new StorageEvent('storage', {
        key: 'workout_settings',
        newValue: JSON.stringify(newSettings),
      }));
    });

    expect(screen.getByText('Status: Off')).toBeInTheDocument();
    expect(screen.getByText('Current Difficulty: medium')).toBeInTheDocument();
  });
});
