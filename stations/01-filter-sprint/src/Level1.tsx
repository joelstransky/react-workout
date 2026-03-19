import React from 'react';

const USERS = ['Alice', 'Bob', 'Charlie'];

export default function Level1() {
  return (
    <div>
      {/* 🧠 WORKOUT START */}
      <ul>
        {USERS.map((user) => (
          <li key={user}>{user}</li>
        ))}
      </ul>
    </div>
  );
}
