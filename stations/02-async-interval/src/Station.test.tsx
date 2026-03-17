import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import AsyncInterval from './App';
import { describe, it, expect, vi } from 'vitest';

describe('Station 2: Async Interval', () => {
  it('shows loading state initially', () => {
    render(<AsyncInterval />);
    expect(screen.getByText(/loading/i)).toBeInTheDocument();
  });

  it('renders posts after fetching', async () => {
    const mockPosts = [{ id: 1, title: 'Test Post' }];
    global.fetch = vi.fn().mockResolvedValue({
      ok: true,
      json: async () => mockPosts,
    });

    render(<AsyncInterval />);
    
    await waitFor(() => {
      expect(screen.getByText(/Test Post/i)).toBeInTheDocument();
    });
    expect(screen.queryByText(/loading/i)).not.toBeInTheDocument();
  });

  it('shows error message on fetch failure', async () => {
    global.fetch = vi.fn().mockRejectedValue(new Error('API error'));

    render(<AsyncInterval />);
    
    await waitFor(() => {
      expect(screen.getByText(/error loading posts/i)).toBeInTheDocument();
    });
  });

  it('refetches when button is clicked', async () => {
    global.fetch = vi.fn().mockResolvedValue({
      ok: true,
      json: async () => [{ id: 1, title: 'Initial' }],
    });

    render(<AsyncInterval />);
    
    await waitFor(() => screen.getByText(/Initial/i));

    global.fetch = vi.fn().mockResolvedValue({
      ok: true,
      json: async () => [{ id: 1, title: 'Refetched' }],
    });

    const button = screen.getByRole('button', { name: /refetch/i });
    fireEvent.click(button);

    await waitFor(() => {
      expect(screen.getByText(/Refetched/i)).toBeInTheDocument();
    });
  });
});
