import { render, screen, waitFor } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import Level1 from './Level1';

describe('Station: 02-async-interval - Level 1', () => {
  beforeEach(() => {
    vi.stubGlobal('fetch', vi.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve([{ id: 1, title: 'Post 1' }]),
      })
    ));
  });

  it('fetches and renders posts on mount', async () => {
    render(<Level1 />);
    
    await waitFor(() => {
      expect(screen.getByText('Post 1')).toBeInTheDocument();
    });
    expect(fetch).toHaveBeenCalledWith('https://jsonplaceholder.typicode.com/posts?_limit=5');
  });
});
