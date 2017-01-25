import React, { Component } from 'react';
import ToDoList from './ToDoList.jsx';

import './ToDoApp.css';

class ToDoApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {
          key: 0,
          text: 'Mow the lawn'
        },
        {
          key: 1,
          text: 'Get groceries'
        },
        {
          key: 2,
          text: 'Finish WDI'
        }
      ]
    }
  }

  clear() {
    this.setState({items: []});
  }

  render() {
    return (
      <div className="to-do-app">
        <form onSubmit={(event) => this.addItem(event)}>
          <input ref={(a) => this._inputElement = a}
            placeholder="enter task">
          </input>
          <button type="submit" >add</button>
        </form>

        <ToDoList items={this.state.items} />
      </div>
    )
  }

  addItem(e) {
    e.preventDefault();
    if (this._inputElement.value) {
      let itemArray = this.state.items;
      itemArray.push({
        key: Date.now(),
        text: this._inputElement.value
      })
      this.setState({items: itemArray});
      this._inputElement.value = "";
    }
  }
}

export default ToDoApp;
