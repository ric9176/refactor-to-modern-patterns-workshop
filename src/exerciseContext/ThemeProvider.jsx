import React, { useContext, createContext } from 'react';
import themes from './theme';
import { ThemeProvider as StyledProvider } from 'styled-components';

// First you need to create your `ThemeContext` (use React.CreateContext());
// you need to export this also..

export const ThemeProvider = ({ children }) => {
  // You should heep track of a state to toggle the theme from `light` to `dark`
  // (see the themes.js file)

  //Once you have some state, define a toggleTheme function that sets the theme based on the value or 'theme' (it's either 'light' or 'dark')
  // You'll need to set this function on the value of the context provider
  return (
    // <ThemeContext.Provider value={() => {}}>
    <StyledProvider theme={themes['light']}>{children}</StyledProvider>
    // </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  // In this hook we want to simply use the context (with the useContext() hook) and return it, also we can let those using it know we must be in a child of the provider (see the example)
};

export default ThemeProvider;

// Finally you'll need to wrap your app with the ThemeProvider, you can do this in src/index.js where the other providers are.
