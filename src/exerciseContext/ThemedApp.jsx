import React from 'react';
import Button from './Button';
import Hero from './Hero';
// import { useTheme } from './ThemeProvider';

const ThemedApp = () => {
  /*
   Here we need to use our hook to access the toggleTheme function and 
   pass it to the onClick of our Button
  */
  return (
    <Hero>
      <Button>Theme Switcher</Button>
    </Hero>
  );
};

export default ThemedApp;
