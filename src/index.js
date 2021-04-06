import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ChakraProvider } from '@chakra-ui/react';
import { CounterProvider } from './CounterContext';
import ThemeProvider from './exerciseContext/ThemeProvider';

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider>
      <CounterProvider>
        <App />
      </CounterProvider>
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
