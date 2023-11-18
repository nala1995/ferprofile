import React from 'react';
import Toggle from './Toggle';
import Sliderbar from './Sliderbar';
import { ThemeProvider } from './ThemeContext';
import Discordicon from './Discord';

function Column1() {
  return (
    <ThemeProvider>
        <div className='container-col2'>
          <Sliderbar />
        </div>
        <div className={`container-col1`}>
          <Toggle />
        </div>
        <div className={`container-col3`}>
          <Discordicon />
        </div>
    </ThemeProvider>
  );
}

export default Column1;
