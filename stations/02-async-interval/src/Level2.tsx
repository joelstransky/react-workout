import React, { useState, useEffect } from 'react';

type Post = {
  id: number;
  title: string;
};

export default function Level2() {
  const [data, setData] = useState<Post[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // 🧠 WORKOUT START: Handle loading and error states
    setIsLoading(true);
    fetch("https://jsonplaceholder.typicode.com/posts?_limit=5")
      .then(res => {
        if (!res.ok) throw new Error("HTTP error");
        return res.json();
      })
      .then(json => setData(json))
      .catch(err => setError(err.message))
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <div>
      <h2>Level 2: Loading & Error States</h2>
      {/* 🏃‍♂️ WORKOUT START: Render appropriately based on state */}
      {isLoading && <p>Loading...</p>}
      {error && <p>Error Loading Posts: {error}</p>}
      {!isLoading && !error && (
        <ul>
          {data.map(post => <li key={post.id}>{post.title}</li>)}
        </ul>
      )}
    </div>
  );
}
