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
// import { withuseRandomImage } from './useRandomImage';

class ClassComponentHOC extends Component {
  constructor(props) {
    super(props);
  }
  // Class stuff that you can't refactor would be here 😬

  render() {
    // We need access to the return values from our hook here as props

    return (
      <Box m={2}>
        <Heading as='h3' mb={2}>
          Part 2 (HOC)
        </Heading>
        <Text mb={2}>
          Create and export a new function in <Code>useRandomImage.jsx</Code>{' '}
          that implements the HOC pattern.
        </Text>
        <Text mb={2}>
          Refactor this component{' '}
          <Code colorScheme='yellow'>src/exercise2/ClassComponentHOC.jsx</Code>{' '}
          to implement the <Code>useRandomImage hook</Code> making use of your
          HOC export that works in a class
        </Text>
        <Text>
          Tip: Check out how we did this in the example in{' '}
          <Code>useDocumentTitle.jsx</Code>
        </Text>
        {/* Use the return from your hook here for the image src! Also, add your reload button ;-)  */}

        <Image />

        <Box height='150px' width='150px' border='1px solid red' />
        {/* Feel free to remove this box ^^ ;-) */}
      </Box>
    );
  }
}

export default ClassComponentHOC;
