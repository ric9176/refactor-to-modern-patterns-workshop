import { useState, useEffect } from 'react';

const useTitleEffect = ({ title }) => {
  const [count, setCount] = useState(0);
  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    document.title = `${count} ${title}`;
  }, [count, title]);

  return {
    count,
    setCount,
  };
};

// render props for use in class component
const UseTitleEffect = ({ children, title }) => {
  const { count, setCount } = useTitleEffect({ title });
  return children({ count, setCount });
};

// HOC for use in class component
const withUseTitleEffectHOC = Component => {
  const WrappedComponent = ({ title, ...props }) => {
    const { count, setCount } = useTitleEffect({ title });
    return (
      <Component count={count} setCount={setCount} title={title} {...props} />
    );
  };
  return WrappedComponent;
};

export { useTitleEffect as default, UseTitleEffect, withUseTitleEffectHOC };
