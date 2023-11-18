import React, { useEffect } from 'react';
import { useTheme } from './ThemeContext';
import './Toggle.css';
import moon from './assets/moon.svg';
import sun from './assets/sun.svg';

function Toggle() {
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'light') {
      root.style.setProperty('--background-color', '#ffffff');
      root.style.setProperty('--text-color', '#262626');
    } else {
      root.style.setProperty('--background-color', '#262626');
      root.style.setProperty('--text-color', '#ffffff');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const handleToggleClick = () => {
    toggleTheme();
  };

  return (
    <div className={`toggle ${theme}`}>
      <label className="switch">
        <input type="checkbox" onChange={handleToggleClick} checked={theme === 'light'} />
        <span className="slider round">
          <div className="icons">
            <img
              className={`moon-icon ${theme === 'light' ? '' : 'hidden'}`}
              src={moon}
              alt="Moon"
            />
            <img
              className={`sun-icon ${theme === 'light' ? 'hidden' : ''}`}
              src={sun}
              alt="Sun"
            />
          </div>
        </span>
      </label>
    </div>
  );
}

export default Toggle;
