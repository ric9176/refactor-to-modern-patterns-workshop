import { Component } from 'react';
import { Button, Text, Box } from '@chakra-ui/react';

import { UseTitleEffect } from './useDocumentTitle';
import { UseCounter } from './CounterContext';

class DocTitleEffectClassComp extends Component {
  constructor(props) {
    super(props);
  }
  //class stuff ComponentDidMount etc...

  render() {
    // can't do this! ==> const {count, setCount} = useDocumentTitleEffect({title: "my title"})
    return (
      <Box bg='tomato' fontWeight='semibold'>
        <UseCounter>
          {({ setCount, count }) => (
            <>
              <Text>Count: {count}</Text>
              <Button onClick={() => setCount(count + 1)}>Click me</Button>
            </>
          )}
        </UseCounter>
      </Box>
    );
  }
}

export default DocTitleEffectClassComp;
