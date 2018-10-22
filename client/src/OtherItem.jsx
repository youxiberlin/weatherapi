import React, { Component } from 'react';

class OtherItem extends Component {
  render() {
    return (
      <div>
        {this.props.temp}
      </div>
    );
  }
}

export default OtherItem;