import React, { createContext } from 'react';

// 🧠 WORKOUT START: Create a Theme Context
export const ThemeContext = createContext('light');

export default function Level1() {
  return (
    <ThemeContext.Provider value="light">
      <div>
        <h2>Level 1: Provider Setup</h2>
        <p>The context is set up, but we aren't consuming it yet.</p>
      </div>
    </ThemeContext.Provider>
  );
}
