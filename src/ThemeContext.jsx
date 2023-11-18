import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
  const savedTheme = localStorage.getItem('theme') || 'dark';
  const [theme, setTheme] = useState(savedTheme);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  useEffect(() => {
    // Cambia los estilos del Navbar según el tema
    const navbar = document.querySelector('.navbar');
    if (navbar) {
      if (theme === 'light') {
        navbar.classList.remove('dark-navbar');
        navbar.classList.add('light-navbar');
      } else {
        navbar.classList.remove('light-navbar');
        navbar.classList.add('dark-navbar');
      }
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};



