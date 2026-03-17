import React, { useState } from 'react';

export default function Level1() {
  // 🧠 WORKOUT START: Create a state for 'search' and update it on input change
  const [search, setSearch] = useState('');

  return (
    <div>
      <h2>Level 1: Basic State</h2>
      {/* 🏃‍♂️ WORKOUT START: Add an input and display the search value below it */}
      <input 
        type="text" 
        value={search} 
        onChange={(e) => setSearch(e.target.value)} 
        placeholder="Type here..." 
      />
      <p>Current search: {search}</p>
    </div>
  );
}
