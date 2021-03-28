import react, { Component } from 'react';
import { Button } from '@chakra-ui/react';

import { UseTitleEffect } from './useDocumentTitle';

class DocTitleEffectClassComp extends Component {
  constructor(props) {
    super(props);
  }
  //class stuff ComponentDidMount etc...

  render() {
    // const {count, setCount} = useDocumentTitleEffect({title: "my title"})
    return (
      <>
        <UseTitleEffect title='new something'>
          {({ setCount, count }) => (
            <>
              <p>count: {count}</p>
              <Button onClick={() => setCount(count + 1)}>Click me</Button>
            </>
          )}
        </UseTitleEffect>
      </>
    );
  }
}

export default DocTitleEffectClassComp;
