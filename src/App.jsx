import React, { Component } from 'react';
import './App.css';

import ToDoApp from './ToDoApp.jsx';
import ToDoList from './ToDoList.jsx';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ToDoApp />
      </div>
    );
  }
}

export default App;
