import react, { Component } from 'react';
import { withUseTitleEffectHOC } from './useDocumentTitle';

class DocTitleClassComponent extends Component {
  constructor(props) {
    super(props);
  }
  //Other class stuff that can't be refactored now, ComponentDidMount etc...
  render() {
    console.log('this.props', this.props);
    // const {count, setCount} = useDocumentTitleEffect({title: "my tit"})
    return (
      <>
        <p>count: {this.props.count}</p>
        <p>title: {this.props.title}</p>
        <button onClick={() => this.props.setCount(this.props.count + 1)}>
          Click me
        </button>
      </>
    );
  }
}

export default withUseTitleEffectHOC(DocTitleClassComponent);
