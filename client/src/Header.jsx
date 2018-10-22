import React, { Component } from 'react';
import styled from 'styled-components'


class Header extends Component {
  render() {
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


    const Header = styled.section`
    padding: 2em;
    background: #333;
    color: white;
  `;

    const HeaderItem = styled.div`
    font-size: 5rem;
    display: flex;
    justify-content:center;
  `;

    return (
      <Header>
        <h1>{data.name}</h1>
        <HeaderItem>
          <p style={{ marginRight: '1em' }}>{temp}</p>
          <p>{weatherIcon}</p>
        </HeaderItem>
      </Header>
    );
  }

  toCelcius = (num) => {
    let result;
    result = num - 273.15;
    return result;
  }
}

export default Header;