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

  findDaysWeather(dayData) {
    const mappedData = dayData.map((el) =>
      el.weather
    )
    let counts = {};
    mappedData.forEach(x => { counts[x] = (counts[x] || 0) + 1; });

    const res = [];
    for (let prop in counts) {
      if (counts[prop] > 3) {
        res.push(prop)
      } else if (counts[prop] > 2) {
        res.push(prop)
      }
    }
    return res;
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

    const data = this.props.data;
    console.log(data)
    const weatherData = data.slice(0, 8)
    const mappedItem = weatherData.map((el, i) =>
      <OtherItem
        key={i}
        temp={el.temp}
        time={el.time}
        weather={el.weather}
        weatherMore={el.weather_more}
      />
    )

    const minMax = this.findMinMaxTemp(data);
    const dayWeather = this.findDaysWeather(data);

    const minStyle = {
      color: '#bbb',
    };

    const marginRight = {
      marginRight: '.5em'
    }


    let detailStyle;
    if (!this.state.detail) {
      detailStyle = {
        display: 'none',
      }
    } else {
      detailStyle = {
        display: 'flex',
        justifyContent: 'space-around',
      }
    }

    return (
      <div>
        <div className="d-flex container">
          <h1 style={marginRight}>{data[0].date}</h1>
          <h1>{dayWeather}</h1>
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