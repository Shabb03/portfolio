import React, {createContext, useState, useEffect} from 'react';

export const ThemeContext = createContext();

const cyberpunkThemes = {
  pink: {
    primary: '#ff006c',
    secondary: '#00f6ff',
    surface: '#16213e',
    background: '#0d0221',
    text: '#ffffff',
    'text-secondary': '#8f8f8f'
  },
  blue: {
    primary: '#00f6ff',
    secondary: '#ff006c',
    surface: '#16213e',
    background: '#0d0221',
    text: '#ffffff',
    'text-secondary': '#8f8f8f'
  },
  green: {
    primary: '#39ff14',
    secondary: '#ffe600',
    surface: '#16213e',
    background: '#0d0221',
    text: '#ffffff',
    'text-secondary': '#8f8f8f'
  }
};

export const ThemeProvider = ({children}) => {
  const [theme, setTheme] = useState('green');

  useEffect(() => {
    if (cyberpunkThemes[theme]) {
      const themeColors = cyberpunkThemes[theme];
      document.documentElement.style.setProperty('--primary', themeColors.primary);
      document.documentElement.style.setProperty('--secondary', themeColors.secondary);
      document.documentElement.style.setProperty('--surface', themeColors.surface);
      document.documentElement.style.setProperty('--background', themeColors.background);
      document.documentElement.style.setProperty('--text', themeColors.text);
      document.documentElement.style.setProperty('--text-secondary', themeColors['text-secondary']);
    }
  }, [theme]);

  const toggleTheme = (newTheme) => {
    if (cyberpunkThemes[newTheme]) {
        setTheme(newTheme);
    }
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}