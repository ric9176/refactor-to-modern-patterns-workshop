import react, { Component } from 'react';
import { withUseTitleEffectHOC } from './useDocumentTitle';
import { Button } from '@chakra-ui/react';

class DocTitleClassComponent extends Component {
  constructor(props) {
    super(props);
  }
  //Other class stuff that can't be refactored now, ComponentDidMount etc...
  render() {
    // const {count, setCount} = useDocumentTitleEffect({title: "my tit"})
    return (
      <>
        <p>count: {this.props.count}</p>
        <p>title: {this.props.title}</p>
        <Button onClick={() => this.props.setCount(this.props.count + 1)}>
          Click me
        </Button>
      </>
    );
  }
}

export default withUseTitleEffectHOC(DocTitleClassComponent);
