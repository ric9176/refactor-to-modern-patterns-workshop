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
      setLoading(false)
    }
    fetchRandomImage()
  }, [mounted]);

  return { imageUrl, loading, error, toggle };
};

// 1.Write out and export a component that implements useRandomImage as a Component that uses Render Props pattern
// 2. Write out and export a function that implements useRandomImage and exposes it as an HOC (higher order component)
// 3. Bonus, add a button that fetches a new random image, hint: This hook would need to return someting else

export default useRandomImage;
