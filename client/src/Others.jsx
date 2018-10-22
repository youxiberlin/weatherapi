import React, { Component } from 'react';
import OtherItem from './OtherItem';

class Others extends Component {
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


    return (
      <div>
        <div className="d-flex container">
          <h1 style={marginRight}>{data[0].date}</h1>
          <h1 style={marginRight}>{data[data.length - 1]}</h1>
          <h1 style={marginRight}>{minMax[1]}</h1>
          <h1 style={minStyle}>{minMax[0]}</h1>
        </div>
        <div>
          {mappedItem}
        </div>
      </div>
    );
  }
}

export default Others;