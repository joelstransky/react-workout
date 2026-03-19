import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import Level3 from './Level3';

describe('Station: 02-async-interval - Level 3', () => {
  beforeEach(() => {
    vi.stubGlobal('fetch', vi.fn());
  });

  it('refetches when button is clicked', async () => {
    vi.mocked(fetch).mockResolvedValue({
      ok: true,
      json: () => Promise.resolve([{ id: 1, title: 'Post 1' }]),
    } as Response);

    render(<Level3 />);
    
    await waitFor(() => {
      expect(screen.getByText('Post 1')).toBeInTheDocument();
    });

    const refetchBtn = screen.getByText('Refetch');
    fireEvent.click(refetchBtn);
    
    expect(screen.getByText('Loading...')).toBeInTheDocument();
    expect(fetch).toHaveBeenCalledTimes(2);
  });
});
