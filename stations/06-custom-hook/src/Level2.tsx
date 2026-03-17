import React, { useState, useEffect } from 'react';

// 🧠 WORKOUT START: Extract the logic into a custom hook
function useLocalStorageString(key: string, initialValue: string) {
  const [value, setValue] = useState(() => {
    return localStorage.getItem(key) || initialValue;
  });

  useEffect(() => {
    localStorage.setItem(key, value);
  }, [key, value]);

  return [value, setValue] as const;
}

export default function Level2() {
  const [name, setName] = useLocalStorageString('workout_hook_name', 'Athlete');

  return (
    <div>
      <h2>Level 2: useLocalStorage Hook</h2>
      <input 
        type="text" 
        value={name} 
        onChange={(e) => setName(e.target.value)} 
      />
      <p>Keep pushing, {name}!</p>
    </div>
  );
}
