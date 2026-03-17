import React, { useState, useEffect } from 'react';

type Post = {
  id: number;
  title: string;
};

export default function Level1() {
  const [data, setData] = useState<Post[]>([]);

  useEffect(() => {
    // 🧠 WORKOUT START: Fetch data and store it in state
    fetch("https://jsonplaceholder.typicode.com/posts?_limit=5")
      .then(res => res.json())
      .then(json => setData(json));
  }, []);

  return (
    <div>
      <h2>Level 1: Basic Fetch</h2>
      {/* 🏃‍♂️ WORKOUT START: Render the data */}
      <ul>
        {data.map(post => <li key={post.id}>{post.title}</li>)}
      </ul>
    </div>
  );
}
