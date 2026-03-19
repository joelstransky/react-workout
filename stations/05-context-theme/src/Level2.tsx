import React, { createContext, useContext, useState, ReactNode } from 'react';

// 🧠 WORKOUT START
type Theme = 'light' | 'dark';
type ThemeContextType = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>('light');
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}

function ThemeDisplay() {
  const { theme } = useTheme();
  return <p data-testid="theme-value">Theme: {theme}</p>;
}

export default function Level2() {
  return (
    <ThemeProvider>
      <h2>Level 2: Theme Provider & Custom Hook</h2>
      <ThemeDisplay />
    </ThemeProvider>
  );
}
