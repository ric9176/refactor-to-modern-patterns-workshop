import { Component } from 'react';
import {
  Box,
  Heading,
  Image,
  Text,
  Code,
  Spinner,
  Button,
} from '@chakra-ui/react';
import { UseRandomImage } from './useRandomImage';

class ClassComponentRenderProps extends Component {
  constructor(props) {
    super(props);
  }
  // Class stuff that you can't refactor would be here 😬

  render() {
    // We need access to the return values from our hook in the return by creating a funtion that takes them as params

    return (
      <Box m={2}>
        <Heading as='h3'>Part A (RenderProps)</Heading>
        <Text>
          Refactor this component to implement the{' '}
          <Code>useRandomImage hook</Code> making use of your render props
          component export that work in a class
        </Text>
        <Text>
          Tip: The fetchRandomImage function image should be executed only on
          the first render.
        </Text>
        {/* Use the return from your hook here for the image src! */}
        <UseRandomImage>
          {({ imageUrl, loading, error, toggle }) => {
            if (loading)
              return <Spinner thickness='4px' color='blue.500' size='xl' />;
            if (error) return <Text>oh no!</Text>;
            return (
              <>
                <Image src={imageUrl} />
                <Button mt={2} onClick={toggle}>
                  Click me
                </Button>
              </>
            );
          }}
        </UseRandomImage>
        <Image />
      </Box>
    );
  }
}

export default ClassComponentRenderProps;
