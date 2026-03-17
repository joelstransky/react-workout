import React, { useState } from 'react';

export const USERS = ["Alice", "Bob", "Charlie", "David"];

export default function Level2() {
  // 🧠 WORKOUT START: Filter the USERS array based on the search state
  const [search, setSearch] = useState('');
  
  const filteredUsers = USERS.filter(user => user.includes(search));

  return (
    <div>
      <h2>Level 2: Filtering Data</h2>
      <input 
        type="text" 
        value={search} 
        onChange={(e) => setSearch(e.target.value)} 
        placeholder="search..." 
      />
      {/* 🏃‍♂️ WORKOUT START: Render the filtered users in a list */}
      <ul>
        {filteredUsers.map(user => <li key={user}>{user}</li>)}
      </ul>
    </div>
  );
}
