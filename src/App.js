import React from 'react';
import './App.css';
import Main from './components/Main/Main.js'


function App() {
  return (
    <div className="App">
      <header className="App-header">
        My App ToDO on React with Redux
      </header>
      <div className='container'>
        <Main/>
      </div>
    </div>
  );
}

export default App;
