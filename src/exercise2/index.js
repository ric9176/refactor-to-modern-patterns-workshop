import React from 'react';
import useRandomImage from './RandomImage';

const Exercise = () => {
  const { imageUrl, loading, error } = useRandomImage();

  if (loading) return <p>...loading</p>;
  if (error) return <p>oh no someting went wrong</p>;

  return (
    <React.Fragment>
      <h3>Exercise</h3>
      <p>
        Refactor the <code>src/patterns/Hooks/exercise/RandomImage.jsx</code>{' '}
        using the <code>useState</code> and <code>useEffect</code> Hooks.
      </p>
      <p>
        Tip: The fetchRandomImage function image should be executed only on the
        first render.
      </p>
      <img src={imageUrl} />
      <hr />
    </React.Fragment>
  );
};

class ExerciseClassComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  // Class stuff that you can't refactor would be here 😬

  render() {
    // We need access to the return values from our hook here
    return (
      <React.Fragment>
        <h3>Exercise</h3>
        <p>
          Refactor the <code>src/patterns/Hooks/exercise/RandomImage.jsx</code>{' '}
          using the <code>useState</code> and <code>useEffect</code> Hooks.
        </p>
        <p>
          Tip: The fetchRandomImage function image should be executed only on
          the first render.
        </p>

        <hr />
      </React.Fragment>
    );
  }
}

export default Exercise;
