import React, { createContext, useContext, useState } from 'react';

type ThemeContextType = {
  theme: string;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType>({ theme: 'light', toggleTheme: () => {} });

function ThemeToggle() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <button onClick={toggleTheme}>
      Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
    </button>
  );
}

function ThemedBox() {
  const { theme } = useContext(ThemeContext);
  return (
    <div style={{
      background: theme === 'dark' ? '#222' : '#eee',
      color: theme === 'dark' ? '#eee' : '#222',
      padding: '20px',
      marginTop: '10px'
    }}>
      Current Theme: {theme}
    </div>
  );
}

export default function Level3() {
  const [theme, setTheme] = useState('light');
  
  const toggleTheme = () => setTheme(prev => prev === 'light' ? 'dark' : 'light');

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div>
        <h2>Level 3: Dynamic Context</h2>
        <ThemeToggle />
        <ThemedBox />
      </div>
    </ThemeContext.Provider>
  );
}
