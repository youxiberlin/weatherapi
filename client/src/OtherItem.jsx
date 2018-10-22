import React, { Component } from 'react';

class OtherItem extends Component {
  render() {
    return (
      <div>
        <p><b>{this.props.time}</b></p>
        <h1>{this.props.temp}</h1>
        <p>{this.props.weather}</p>
        <p>{this.props.weatherMore}</p>
      </div>
    );
  }
}

export default OtherItem;