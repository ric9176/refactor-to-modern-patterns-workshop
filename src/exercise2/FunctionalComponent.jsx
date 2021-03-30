import useRandomImage from './useRandomImage';
import { Heading, Image, Text, Code, Button, Box } from '@chakra-ui/react';

const Exercise2FunctionalComponent = () => {
  // use your hook here!

  return (
    <>
      <Heading as='h3'>Part 1</Heading>
      <Text>
        1. Refactor this component to implement the{' '}
        <Code>useRandomImage hook</Code> and display the image using the
        <Code>Image</Code> component bellow (it taks an src prop 😉)
      </Text>
      <Text>
        2. Update the useRandomImage hook so that it also returns a function we
        can call to refetch the image and pass that to the onClick of the Button
      </Text>
      <Box height="150px" width="150px" border="1px solid red">
      {/* Use the src with <Image /> here and then add your <Button /> */}
      {/* Feel free to  remove the box ;-) */}
      </Box>
      
    </>
  );
};

export default Exercise2FunctionalComponent;
