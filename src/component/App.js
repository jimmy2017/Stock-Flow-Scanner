import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ISOscanner from './ISOscanner'

class App extends Component {


  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Scanner App</h2>
        </div>
        <p className="App-intro">
          <ISOscanner />
          ___________________________________________________________________
        </p>
      </div>
    );
  }
}

export default App;
