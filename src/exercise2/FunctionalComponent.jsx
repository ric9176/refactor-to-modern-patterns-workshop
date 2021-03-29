import useRandomImage from './useRandomImage';
import { Heading, Image, Text, Code, Button } from '@chakra-ui/react';

const Exercise2FunctionalComponent = () => {
  const { imageUrl, loading, error, toggle } = useRandomImage();

  if (loading) return <Text>...loading</Text>;
  if (error) return <Text>oh no someting went wrong</Text>;

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
      <Image src={imageUrl} />
      <Button onClick={toggle}>Click to reload</Button>
    </>
  );
};

export default Exercise2FunctionalComponent;
