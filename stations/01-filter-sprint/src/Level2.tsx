import React, { useState } from 'react';

const USERS = ['Alice', 'Bob', 'Charlie'];

export default function Level2() {
  const [search, setSearch] = useState('');

  // 🧠 WORKOUT START
  const filteredUsers = USERS.filter((user) =>
    user.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <input
        placeholder="Search users..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <ul>
        {filteredUsers.map((user) => (
          <li key={user}>{user}</li>
        ))}
      </ul>
    </div>
  );
}
