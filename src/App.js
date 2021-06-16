import logo from './logo.svg';
import './App.css';
import React, {useEffect} from 'react'

function App() {
  useEffect(() => {
    document.addEventListener('mousemove', customCursorDelay());
  }, []);

  function customCursor(event) {
    let cursor = document.getElementById('customcursor')
    if(cursor == null) {
        cursor = document.createElement('div')
        cursor.id = 'customcursor'
        document.body.append(cursor)
    }

    cursor.style.top = (event.clientY - cursor.offsetHeight / 2) + 'px'
    cursor.style.left = (event.clientX - cursor.offsetWidth / 2) + 'px'
  }

  function customCursorDelay(event) {
      setTimeout(function(){ 
          customCursor(event)
      }, 200);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to BSreload.
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
