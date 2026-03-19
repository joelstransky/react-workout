import React, { useState, useEffect } from 'react';

// 🧠 WORKOUT START: Add JSON support and cross-tab sync
function useLocalStorage<T>(key: string, initialValue: T) {
  const [value, setValue] = useState<T>(() => {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error('Error reading localStorage key “' + key + '”:', error);
      return initialValue;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error('Error writing localStorage key “' + key + '”:', error);
    }
  }, [key, value]);

  useEffect(() => {
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === key && e.newValue !== null) {
        try {
          setValue(JSON.parse(e.newValue));
        } catch (error) {
          console.error('Error parsing storage event value:', error);
        }
      }
    };

    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, [key]);

  return [value, setValue] as const;
}

export default function Level3() {
  const [settings, setSettings] = useLocalStorage('workout_settings', { sound: true, difficulty: 'hard' });

  return (
    <div>
      <h2>Level 3: JSON useLocalStorage & Sync</h2>
      <label>
        <input 
          type="checkbox" 
          checked={settings.sound} 
          onChange={(e) => setSettings({ ...settings, sound: e.target.checked })} 
          aria-label="Sound Enabled"
        />
        Sound Enabled
      </label>
      <br/>
      <p>Status: {settings.sound ? 'On' : 'Off'}</p>
      <label>
        Difficulty: 
        <select 
          value={settings.difficulty} 
          onChange={(e) => setSettings({ ...settings, difficulty: e.target.value })}
          aria-label="Difficulty Level"
        >
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </select>
      </label>
      <p>Current Difficulty: {settings.difficulty}</p>
    </div>
  );
}
