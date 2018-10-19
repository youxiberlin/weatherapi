import React, { Component } from 'react';

class List extends Component {
  render() {
    return (
      <ul>
        <li>{this.props.time}</li>
        <li>{this.props.temp}</li>
        <li>{this.props.weather}</li>
      </ul>
    );
  }
}

export default List;