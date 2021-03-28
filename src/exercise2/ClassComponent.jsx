import { Component } from 'react'
import { Heading, Image, Text, Code } from '@chakra-ui/react';

class Exercise2ClassComponent extends Component {
    constructor(props) {
      super(props);
    }
    // Class stuff that you can't refactor would be here 😬
  
    render() {
      // We need access to the return values from our hook here

      return (
        <>
          <Heading as="h3">Part 2</Heading>
          <Text>
          Refactor this component to implement the <Code>useRandomImage hook</Code> making use of your render props or HOC exports that work in a class
        </Text>
          <Text>
            Tip: The fetchRandomImage function image should be executed only on
            the first render.
          </Text>
          {/* Use the return from your hook here for the image src! */}
        <Image />
        </>
      );
    }
  }
  
  export default Exercise2ClassComponent;