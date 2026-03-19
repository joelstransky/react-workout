import React, { useState, useEffect } from 'react';

// 🧠 WORKOUT START: Extract the logic into a custom hook
function useLocalStorage(key: string, initialValue: string) {
  const [value, setValue] = useState(() => {
    const savedValue = localStorage.getItem(key);
    return savedValue !== null ? savedValue : initialValue;
  });

  useEffect(() => {
    localStorage.setItem(key, value);
  }, [key, value]);

  return [value, setValue] as const;
}

export default function Level2() {
  const [name, setName] = useLocalStorage('workout_hook_name', 'Athlete');

  return (
    <div>
      <h2>Level 2: useLocalStorage Hook</h2>
      <input 
        type="text" 
        value={name} 
        onChange={(e) => setName(e.target.value)} 
        placeholder="Enter athlete name"
      />
      <p>Keep pushing, {name}!</p>
    </div>
  );
}
