import { Component } from 'react';
import { Button, Text } from '@chakra-ui/react';

import { UseTitleEffect } from './useDocumentTitle';

class DocTitleEffectClassComp extends Component {
  constructor(props) {
    super(props);
  }
  //class stuff ComponentDidMount etc...

  render() {
    // can't do this! ==> const {count, setCount} = useDocumentTitleEffect({title: "my title"})
    return (
      <>
        <UseTitleEffect title='new'>
          {({ setCount, count }) => (
            <>
              <Text>Count: {count}</Text>
              <Button onClick={() => setCount(count + 1)}>Click me</Button>
            </>
          )}
        </UseTitleEffect>
      </>
    );
  }
}

export default DocTitleEffectClassComp;
