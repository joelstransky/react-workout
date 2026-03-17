import React, { useState, useEffect } from 'react';

// 🧠 WORKOUT START: Add JSON support to handle complex data types
function useLocalStorage<T>(key: string, initialValue: T) {
  const [value, setValue] = useState<T>(() => {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      return initialValue;
    }
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue] as const;
}

export default function Level3() {
  const [settings, setSettings] = useLocalStorage('workout_settings', { sound: true, difficulty: 'hard' });

  return (
    <div>
      <h2>Level 3: JSON useLocalStorage</h2>
      <label>
        <input 
          type="checkbox" 
          checked={settings.sound} 
          onChange={(e) => setSettings({ ...settings, sound: e.target.checked })} 
        />
        Sound Enabled
      </label>
      <br/>
      <label>
        Difficulty: 
        <select 
          value={settings.difficulty} 
          onChange={(e) => setSettings({ ...settings, difficulty: e.target.value })}
        >
          <option value="easy">Easy</option>
          <option value="hard">Hard</option>
        </select>
      </label>
    </div>
  );
}
