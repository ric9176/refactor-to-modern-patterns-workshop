import react, { useState, useEffect, Component } from 'react';
import useDocumentTitleEffect, { UseTitleEffect } from './useDocumentTitle';
import DocTitleClassComponent from './DocTitleClassComponent';
import logo from './logo.svg';
import './App.css';

const DocumentTitleEffectFnComponent = () => {
  const { count, setCount } = useDocumentTitleEffect({ title: 'HEY!' });
  return (
    <div>
      <p>Click counter on the document title</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
};

class DocTitleEffectClassComp extends Component {
  constructor(props) {
    super(props);
  }
  //class stuff ComponentDidMount etc...

  render() {
    // const {count, setCount} = useDocumentTitleEffect({title: "my tit"})
    return (
      <>
        <p>YOOOOO</p>
        <UseTitleEffect title='new something'>
          {({ setCount, count }) => (
            <>
              <p>count: {count}</p>
              <button onClick={() => setCount(count + 1)}>Click me</button>
            </>
          )}
        </UseTitleEffect>
      </>
    );
  }
}

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <DocumentTitleEffectFnComponent />
        {/* <DocTitleEffectClassComp /> */}
        <DocTitleClassComponent title='YOO' />
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
