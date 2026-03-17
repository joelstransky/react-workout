import React, { createContext, useContext } from 'react';

const ThemeContext = createContext('dark');

function ThemedText() {
  // 🧠 WORKOUT START: Consume the Theme Context
  const theme = useContext(ThemeContext);
  
  const style = {
    background: theme === 'dark' ? '#333' : '#fff',
    color: theme === 'dark' ? '#fff' : '#000',
    padding: '10px'
  };

  return <p style={style}>I am styled based on the "{theme}" theme!</p>;
}

export default function Level2() {
  return (
    <ThemeContext.Provider value="dark">
      <div>
        <h2>Level 2: Consuming Context</h2>
        <ThemedText />
      </div>
    </ThemeContext.Provider>
  );
}
