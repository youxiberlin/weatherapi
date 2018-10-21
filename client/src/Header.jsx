import React, { Component } from 'react';

class Header extends Component {
  render() {
    console.log('Header', this.props.data)
    let data = this.props.data;
    let temp = Math.round(this.toCelcius(data.main.temp));
    let currentWeather = data.weather[0].main;
    let weatherIcon;
    if (currentWeather === "Clear") {
      weatherIcon = <i className="wi wi-day-sunny"></i>
    } else if (currentWeather === "Clouds") {
      weatherIcon = <i className="wi wi-cloudy"></i>
    } else if (currentWeather === "Rain") {
      weatherIcon = <i className="wi wi-rain"></i>
    }

    return (
      <div>
        <h1>{data.name}</h1>
        <h1>{temp}</h1>
        <h1>{weatherIcon}</h1>
      </div>
    );
  }

  toCelcius = (num) => {
    let result;
    result = num - 273.15;
    return result;
  }
}

export default Header;