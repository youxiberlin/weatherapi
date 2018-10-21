import React, { Component } from 'react';
import './css/App.css';
import './css/weather-icons.css';

class App extends Component {
  state = {
    current: '',
    data: [],
    loading: true,
    currentDataLoad: true,
  };

  componentDidMount() {
    this.callWeatherApi()
      .then(res => this.setState({ data: res.data, loading: false }))
      .catch(err => console.log(err));

    this.callCurrentWeather()
      .then(res => {
        this.setState({ current: res.data, currentDataLoad: false })
      })
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
    if (this.state.loading || this.setState.currentDataLoad) {
      return <div className='spinner'>loading.....</div>
    }

    let weatherIcon;
    if (!this.state.currentDataLoad) {
      let currentWeather = this.state.current.weather[0].main;
      if (currentWeather === "Clear") {
        weatherIcon = <i className="wi wi-day-sunny"></i>
      } else if (currentWeather === "Clouds") {
        weatherIcon = <i className="wi wi-cloudy"></i>
      } else if (currentWeather === "Rain") {
        weatherIcon = <i className="wi wi-rain"></i>
      }
    }

    let currentTemp;
    if (!this.state.currentDataLoad) {
      currentTemp = Math.round(this.toCelcius(this.state.current.main.temp));
    }

    let headerBackground = {
      background: '#0d395d'
    }

    return (
      <div className="App">
        <header className="App-header" style={headerBackground}>
          <h1>{this.state.current.name}</h1>
          <div>
            <p>{currentTemp}&#176;</p>
            <p>{weatherIcon}</p>
          </div>
        </header>
        <main>

        </main>
      </div>
    );
  }
}

export default App;