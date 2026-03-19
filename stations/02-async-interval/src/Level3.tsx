import React, { useEffect, useState, useCallback } from 'react';

interface Post {
  id: number;
  title: string;
}

export default function Level3() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const fetchPosts = useCallback(() => {
    setLoading(true);
    setError(false);
    fetch('https://jsonplaceholder.typicode.com/posts?_limit=5')
      .then((res) => {
        if (!res.ok) throw new Error();
        return res.json();
      })
      .then((data) => {
        setPosts(data);
        setLoading(false);
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });
  }, []);

  // 🧠 WORKOUT START
  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  return (
    <div>
      <button onClick={fetchPosts}>Refetch</button>
      
      {loading && <div>Loading...</div>}
      {error && <div>Error loading posts</div>}
      
      {!loading && !error && (
        <ul>
          {posts.map((post) => (
            <li key={post.id}>{post.title}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
