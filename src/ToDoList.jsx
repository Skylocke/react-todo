import React, { Component } from 'react';

import ListItem from './ListItem.jsx';

class ToDoList extends Component {
  render() {
    let toDoItems = this.props.items.map((item) => {
      return <ListItem key={item.key} item={item.text} />
    })
    return (
      <ul className="list-unstyled">
        {toDoItems}
      </ul>
    );
  }

}

export default ToDoList;
