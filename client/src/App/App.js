import React, { Component } from 'react';
import Display from './components/display/Display';
import Keypad from './components/keypad/Keypad';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-container">
          <Display />
          <Keypad />
        </div>
      </div>
    );
  }
}

export default App;