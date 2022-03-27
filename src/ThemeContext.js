import React from 'react';

const ThemeContext = React.createContext('theme-light');

export function ThemeProvider({ children }) {
  const [theme, setTheme] = React.useState('theme-light');
}

function toggleTheme() {
  setTheme((currentTheme) =>
    currentTheme === 'theme-light' ? 'theme-dark' : 'theme-light'
  );
}

return (
  <ThemeContext.Provider value={{ theme, toggleTheme }}>
    {children}
  </ThemeContext.Provider>
);
