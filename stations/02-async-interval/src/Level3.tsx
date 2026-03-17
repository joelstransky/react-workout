import React, { useState, useEffect } from 'react';

type Post = {
  id: number;
  title: string;
};

export default function Level3() {
  // 🧠 WORKOUT START: Refactoring to support aborts and refetching
  const [data, setData] = useState<Post[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const update = async (signal: AbortSignal) => {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=5", { signal });
      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
      const result = (await response.json()) as Post[];
      setData(result);
    } catch (err) {
      if (err instanceof Error && err.name === 'AbortError') return;
      if (err instanceof Error) setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const controller = new AbortController();
    update(controller.signal);
    return () => controller.abort();
  }, []);

  const onReload = () => {
    setIsLoading(true);
    setError(null);
    const controller = new AbortController();
    update(controller.signal);
  };

  return (
    <div className="station">
      <h2>Level 3: AbortController & Refetch</h2>
      <button onClick={onReload}>Refetch</button>
      <ul>
        {isLoading && <li>Loading...</li>}
        {error && <li>Error Loading Posts: {error}</li>}
        {data.length > 0 && !isLoading && (
          data.map(post => <li key={post.id}>{post.title}</li>)
        )}
      </ul>
    </div>
  );
}
