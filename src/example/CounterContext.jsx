import { useState, useContext, createContext } from 'react';

const CounterContext = createContext(undefined);

const CounterProvider = ({ children }) => {
  const [count, setCount] = useState(0);

  return (
    <CounterContext.Provider value={{ count, setCount }}>
      {children}
    </CounterContext.Provider>
  );
};

const useCounter = () => {
  const context = useContext(CounterContext);

  if (context === undefined) {
    throw new Error('useCounterState must be used within a CounterProvider');
  }
  return context;
};

const UseCounter = ({ children }) => {
  const { count, setCount } = useCounter();
  return children({ count, setCount });
};

export { CounterProvider, useCounter, UseCounter };
