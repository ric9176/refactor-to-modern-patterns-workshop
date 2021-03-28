import { Component } from 'react';
import { withUseTitleEffectHOC } from './useDocumentTitle';
import { Button, Text } from '@chakra-ui/react';

class DocTitleClassComponent extends Component {
  constructor(props) {
    super(props);
  }
  //Other class stuff that can't be refactored now, ComponentDidMount etc...
  render() {
    // can't do this! ==> const {count, setCount} = useDocumentTitleEffect({title: "my title"})

    const { count, title, setCount } = this.props;

    return (
      <>
        <Text>Count: {count}</Text>
        <Text>Document title: {title}</Text>
        <Button onClick={() => setCount(count + 1)}>Click me</Button>
      </>
    );
  }
}

export default withUseTitleEffectHOC(DocTitleClassComponent);
