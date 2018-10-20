import React, { Component } from 'react';

class Item extends Component {
  render() {
    let weatherIcon;

    const weather = this.props.weather;
    if (weather === "Clear") {
      weatherIcon = <i className="wi wi-day-sunny wi-lg"></i>
    } else if (weather === "Clouds") {
      weatherIcon = <i className="wi wi-cloudy wi-lg"></i>
    } else if (weather === "Rain") {
      weatherIcon = <i className="wi wi-rain wi-lg"></i>
    }

    return (
      <div className='item'>
        <p><b>{this.props.time}</b></p>
        <h1>{this.props.temp}</h1>
        <p>{weatherIcon}</p>
      </div>
    );
  }
}

export default Item;