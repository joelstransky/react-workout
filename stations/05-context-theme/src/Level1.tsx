import React, { createContext, useContext } from 'react';

// 🧠 WORKOUT START
const ThemeContext = createContext('light');

function DisplayTheme() {
  const theme = useContext(ThemeContext);
  return <p data-testid="theme-value">Current Theme: {theme}</p>;
}

export default function Level1() {
  return (
    <div>
      <h2>Level 1: Static Context</h2>
      <ThemeContext.Provider value="light">
        <DisplayTheme />
      </ThemeContext.Provider>
    </div>
  );
}
