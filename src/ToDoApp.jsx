import React, { Component } from 'react';
import ToDoList from './ToDoList.jsx';

class ToDoApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    }
  }

  clear() {
    this.setState({items: []});
  }

  render() {
    return (
      <div className="container">
        <form onSubmit={(event) => this.addItem(event)}>
          <input ref={(a) => this._inputElement = a}
            placeholder="enter task">
          </input>
          <button type="submit">add</button>
        </form>

        <ToDoList items={this.state.items} />
      </div>
    )
  }

  addItem(e) {
    e.preventDefault();
    let itemArray = this.state.items;
    itemArray.push({
      key: Date.now(),
      text: this._inputElement.value
    })
    this.setState({items: itemArray});
    this._inputElement.value = "";
  }
}

export default ToDoApp;
