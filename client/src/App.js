import React, { Component } from 'react';
import './css/App.css';
import './css/weather-icons.css';
// import Header from './Header';

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

  render() {
    if (this.state.loading || this.state.currentDataLoad) {
      return <div className='spinner'>loading.....</div>
    }

    let headerBackground = {
      background: '#0d395d'
    }

    if (!this.state.loading && !this.state.currentDataLoad) {
      console.log(this.state.current, this.state.data)
      return (
        <div className="App">
          <header className="App-header" style={headerBackground}>
            {/* <Header
              data={this.state.current}
            /> */}
          </header>
          <main>

          </main>
        </div>
      );
    }
  }
}

export default App;