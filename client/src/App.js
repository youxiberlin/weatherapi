import React, { Component } from 'react';
import List from './List';
import './css/App.css';
import './css/weather-icons.css';

class App extends Component {
  state = {
    current: '',
    data: [],
    loading: true,
  };

  componentDidMount() {
    this.callWeatherApi()
      .then(res => this.setState({ data: res.data, loading: false }))
      .catch(err => console.log(err));

    this.callCurrentWeather()
      .then(res => this.setState({ current: res.data }))
      .catch(err => console.log(err));

  }


  callWeatherApi = async () => {
    const response = await fetch('/api/weather');
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);
    return body;
  }

  callCurrentWeather = async () => {
    const response = await fetch('/api/weather/now');
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);
    return body;
  }

  toCelcius = (num) => {
    let result;
    result = num - 273.15;
    return result;
  }

  render() {
    if (this.state.loading) {
      return <div className='spinner'>loading.....</div>
    }

    console.log(this.state.current)

    const mappedList = this.state.data.list.map((el, i) =>
      <List
        key={i}
        time={el.dt_txt}
        temp={el.main.temp}
        weather={el.weather[0].main}
      />
    )

    let weatherIcon;
    if (!this.state.loading) {
      const currentWeather = this.state.current.weather[0].main;
      if (currentWeather === "Clear") {
        weatherIcon = <i className="wi wi-day-sunny wi-lg"></i>
      } else if (currentWeather === "Clouds") {
        weatherIcon = <i className="wi wi-cloudy wi-lg"></i>
      } else if (currentWeather === "Rain") {
        weatherIcon = <i className="wi wi-rain wi-lg"></i>
      }
    }

    let currentTemp = this.toCelcius(this.state.current.main.temp)

    return (

      <div className="App">
        <header className="App-header">
          {this.state.current.name}
          {weatherIcon}
          {currentTemp} &#8451;
        </header>
        <div>{mappedList}</div>
      </div>
    );
  }
}

export default App;