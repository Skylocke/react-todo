import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import ToDoApp from './ToDoApp.jsx';

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>React To-Do List</h2>
          </div>
          <ToDoApp />
        </div>
      </div>
    );
  }
}

export default App;
