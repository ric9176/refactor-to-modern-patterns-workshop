import React, { useState, useEffect } from 'react';

const useRandomImage = () => {
  const [imageUrl, setImageUrl] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(undefined);

  const fetchRandomImage = async () => {
    const response = await fetch(
      'https://jsonplaceholder.typicode.com/photos?_limit=100',
    );
    const data = await response.json();
    const image = data[Math.floor(Math.random() * data.length)];
    setImageUrl(image.thumbnailUrl);
  };

  useEffect(() => {
    setLoading(true);
    try {
      fetchRandomImage();
    } catch (err) {
      setError(err);
    }
    setLoading(false);
  }, []);

  return { imageUrl, loading, error };
};

// 1.Write out and export a component that implements useRandomImage as a Component that uses Render Props pattern
// 2. Write out and export a function that implements useRandomImage and exposes it as an HOC (higher order component)

export default useRandomImage;
