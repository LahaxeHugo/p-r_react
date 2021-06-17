import logo from '../img/logo.svg';
import '../css/App.css';

import React, {useEffect} from 'react'
import Canvas from './Canvas'

function App() {
  return (
    <div className="App">
      <Canvas />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/class/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
