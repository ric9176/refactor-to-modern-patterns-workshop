import React from 'react';
import Button from './Button';
import Hero from './Hero';
import { useTheme } from './ThemeProvider';

const ThemedApp = () => {
  const { toggleTheme } = useTheme();

  return (
    <Hero>
      <Button onClick={toggleTheme}>Theme Switcher</Button>
    </Hero>
  );
};

export default ThemedApp;
