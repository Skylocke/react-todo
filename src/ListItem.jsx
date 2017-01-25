import React, { Component } from 'react';


class ListItem extends Component {

  render() {
    return (
      <li className="ListItem well">
        {this.props.item}
      </li>
    );
  }

}


export default ListItem;
