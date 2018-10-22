import React, { Component } from 'react';
import OtherItem from './OtherItem';
import { Button } from 'reactstrap';

class Others extends Component {
  constructor(props) {
    super(props)
    this.state = {
      detail: false,
    }

    this._showDetail = this._showDetail.bind(this)
  }

  findMinMaxTemp(dayData) {
    const mappedData = dayData.map((el) =>
      el.temp
    )
    let result = [];
    let currentMin = mappedData[0];
    let currentMax = mappedData[0];

    for (let i = 0; i < mappedData.length; i++) {
      if (currentMin > mappedData[i]) {
        currentMin = mappedData[i]
      }
    }
    for (let i = 0; i < mappedData.length; i++) {
      if (currentMax < mappedData[i]) {
        currentMax = mappedData[i]
      }
    }
    result.push(currentMin, currentMax)
    return result;
  }

  _showDetail() {
    if (!this.state.detail) {
      this.setState({
        detail: true,
      })
    } else {
      this.setState({
        detail: false,
      })
    }
  }

  render() {

    console.log(this.props.data)
    const data = this.props.data;

    const mappedItem = data.map((el, i) =>
      <OtherItem
        key={i}
        temp={el.temp}
      />
    )

    const minMax = this.findMinMaxTemp(data);

    const minStyle = {
      color: '#bbb',
    };

    const marginRight = {
      marginRight: '.5em'
    }

    console.log('this.state.detail', this.state.detail)
    let detailStyle;
    if (!this.state.detail) {
      detailStyle = {
        display: 'none',
      }
    } else {
      detailStyle = {
        display: 'block',
      }
    }

    return (
      <div>
        <div className="d-flex container">
          <h1 style={marginRight}>{data[0].date}</h1>
          <h1 style={marginRight}>{data[data.length - 1]}</h1>
          <h1 style={marginRight}>{minMax[1]}</h1>
          <h1 style={minStyle}>{minMax[0]}</h1>
        </div>
        <Button
          onClick={this._showDetail}
        >more</Button>
        <div style={detailStyle}>
          {mappedItem}
        </div>
      </div>
    );
  }
}

export default Others;