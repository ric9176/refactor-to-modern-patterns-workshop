import React from 'react';
import { Text, Code } from '@chakra-ui/react';
import Button from './Button';
import Hero from './Hero';
// import { useTheme } from './ThemeProvider';

const ThemedApp = () => {
  /*
   Here we need to use our hook to access the toggleTheme function and 
   pass it to the onClick of our Button
  */
  return (
    <>
      <Text>
        1. Finish implementing the ThemeProvider context in{' '}
        <Code>src/exerciseContext/ThemeProvider.jsx</Code> Hint: There are lots
        of code comments in this file, read them :-)
      </Text>
      <Text>
        2. In <Code>index.js</Code> implement your provider by wrapping the app.
      </Text>
      <Text>
        3. In <Code>src/exerciseContext/ThemedApp.jsx</Code> use your useTheme
        hook to get the function that updates the theme state and pass it to the
        onClick handler of the Button.
      </Text>

      {/* You'll need to add your "toggleTheme" function to the onClick of this button*/}
      <Hero>
        <Button>Theme Switcher</Button>
      </Hero>
    </>
  );
};

export default ThemedApp;
