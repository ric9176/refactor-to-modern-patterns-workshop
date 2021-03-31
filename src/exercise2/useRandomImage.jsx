import { useState, useEffect } from 'react';

const useRandomImage = () => {
  const [imageUrl, setImageUrl] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(undefined);
  const [mounted, setMounted] = useState(true);

  const toggle = () => setMounted(!mounted);

  useEffect(() => {
    const fetchRandomImage = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          'https://rickandmortyapi.com/api/character',
        );
        const data = await response.json();
        const characters = data.results;
        const character =
          characters[Math.floor(Math.random() * characters.length)];
        setImageUrl(character.image);
      } catch (err) {
        setError(err);
      }
      setLoading(false);
    };
    fetchRandomImage();
  }, [mounted]);

  return { imageUrl, loading, error, toggle };
};

// render props for use in class component
const UseRandomImage = ({ children }) => {
  const { imageUrl, loading, error, toggle } = useRandomImage();
  return children({ imageUrl, loading, error, toggle });
};

// HOC for use in class component
const withuseRandomImage = Component => {
  const WrappedComponent = ({ ...props }) => {
    const { imageUrl, loading, error, toggle } = useRandomImage();
    return (
      <Component
        imageUrl={imageUrl}
        loading={loading}
        error={error}
        toggle={toggle}
        {...props}
      />
    );
  };
  return WrappedComponent;
};

// Tasks for this file:
// 1. Add a refresh function to useRandomImage and return it along with the other values
// 2. Write out and export a component that implements useRandomImage as a Component that uses Render Props pattern (and use it inside ClassComponentRenderProps )
// 3. Write out and export a function that implements useRandomImage and exposes it as an HOC (higher order component), and then import and use your HOC in ClassComponentHOC

export { useRandomImage as default, UseRandomImage, withuseRandomImage };
