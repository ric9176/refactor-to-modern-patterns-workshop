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
          'https://jsonplaceholder.typicode.com/photos?_limit=100',
        );
        const data = await response.json();
        const image = data[Math.floor(Math.random() * data.length)];
        setImageUrl(image.thumbnailUrl);
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
const UseRandomImage = () => {
  // need to do some coding here 😎
};

// HOC for use in class component
const withuseRandomImage = () => {
  // need to do some coding here 😎
  // Tip: remember that a HOC is a function that takes a component as an arg and returns another component
};

// Tasks for this file:
// 1. Add a refresh function to useRandomImage and return it along with the other values
// 2. Write out and export a component that implements useRandomImage as a Component that uses Render Props pattern (and use it inside ClassComponentRenderProps )
// 3. Write out and export a function that implements useRandomImage and exposes it as an HOC (higher order component), and then import and use your HOC in ClassComponentHOC

export { useRandomImage as default, UseRandomImage, withuseRandomImage };
