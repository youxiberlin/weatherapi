import React, { Component } from 'react';

class List extends Component {
  render() {
    return (
      <ul>
        <li>{this.props.time}</li>
        <li>{this.props.temp}</li>
      </ul>
    );
  }
}

export default List;