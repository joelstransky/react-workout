import { render, screen, waitFor } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import Level2 from './Level2';

describe('Station: 02-async-interval - Level 2', () => {
  beforeEach(() => {
    vi.stubGlobal('fetch', vi.fn());
  });

  it('shows loading state then posts', async () => {
    vi.mocked(fetch).mockResolvedValueOnce({
      ok: true,
      json: () => Promise.resolve([{ id: 1, title: 'Post 1' }]),
    } as Response);

    render(<Level2 />);
    
    expect(screen.getByText('Loading...')).toBeInTheDocument();
    
    await waitFor(() => {
      expect(screen.getByText('Post 1')).toBeInTheDocument();
    });
    expect(screen.queryByText('Loading...')).not.toBeInTheDocument();
  });

  it('shows error state on failure', async () => {
    vi.mocked(fetch).mockRejectedValueOnce(new Error());

    render(<Level2 />);
    
    await waitFor(() => {
      expect(screen.getByText('Error loading posts')).toBeInTheDocument();
    });
  });
});
