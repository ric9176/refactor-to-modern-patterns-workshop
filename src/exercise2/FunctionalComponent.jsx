import useRandomImage from './useRandomImage';
import { Heading, Image, Text, Code, Button } from '@chakra-ui/react';

const Exercise2FunctionalComponent = () => {
    const { imageUrl, loading, error, toggle } = useRandomImage();
    
    if (loading) return <Text>...loading</Text>;
    if (error) return <Text>oh no someting went wrong</Text>;
  
    return (
      <>
        <Heading as="h3">Part 1</Heading>
        <Text>
          Refactor this component to implement the <Code>useRandomImage hook</Code>
        </Text>
        <Image src={imageUrl} />
        <Button onClick={toggle}>Click to reload</Button>
      </>
    );
  };

  export default Exercise2FunctionalComponent
