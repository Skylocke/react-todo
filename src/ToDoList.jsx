import React, { Component } from 'react';
import ListItem from './ListItem.jsx';

import './ToDoList.css';

class ToDoList extends Component {
  render() {
    let toDoItems = this.props.items.map((item) => {
      return <ListItem key={item.key} item={item.text} />
    })
    return (
      <div className="list">
        <ul className="list-unstyled">
          {toDoItems}
        </ul>
      </div>
    );
  }

}

export default ToDoList;
