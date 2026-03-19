import React, { useState } from 'react';

const USERS = ['Alice', 'Bob', 'Charlie'];

export default function Level3() {
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
      <button onClick={() => setSearch('')}>Clear Search</button>
      
      {filteredUsers.length === 0 ? (
        <p>No users found</p>
      ) : (
        <ul>
          {filteredUsers.map((user) => (
            <li key={user}>{user}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
