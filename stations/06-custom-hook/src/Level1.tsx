import React, { useState, useEffect } from 'react';

export default function Level1() {
  // 🧠 WORKOUT START: Manage state and sync it to localStorage
  const [name, setName] = useState(() => {
    return localStorage.getItem('workout_name') || '';
  });

  useEffect(() => {
    localStorage.setItem('workout_name', name);
  }, [name]);

  return (
    <div>
      <h2>Level 1: Component LocalStorage</h2>
      <input 
        type="text" 
        value={name} 
        onChange={(e) => setName(e.target.value)} 
        placeholder="Enter your name"
      />
      <p>Hello, {name || 'Stranger'}!</p>
    </div>
  );
}
