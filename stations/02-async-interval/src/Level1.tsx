import React, { useEffect, useState } from 'react';

interface Post {
  id: number;
  title: string;
}

export default function Level1() {
  const [posts, setPosts] = useState<Post[]>([]);

  // 🧠 WORKOUT START
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts?_limit=5')
      .then(res => res.json())
      .then(data => setPosts(data));
  }, []);

  return (
    <div>
      <ul>
        {posts.map(post => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}
