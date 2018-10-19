import React, { Component } from 'react';
import List from './List';
import './App.css';

class App extends Component {
  state = {
    response: '',
    data: [],
    loading: true,
  };

  componentDidMount() {
    this.callApi()
      .then(res => this.setState({ response: res.express }))
      .catch(err => console.log(err));

    this.callWeatherApi()
      .then(res => this.setState({ data: res, loading: false }))
      .catch(err => console.log(err));
  }

  callApi = async () => {
    const response = await fetch('/api/hello');
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);
    return body;
  };

  callWeatherApi = async () => {
    const response = await fetch('/api/weather');
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);
    return body;
  }

  render() {
    if (this.state.loading) {
      return <div className='spinner'>loading.....</div>
    }



    console.log(this.state.data)
    return (
      <div className="App">
        <header className="App-header">
          header
        </header>
        <p className="App-intro">{this.state.response}</p>
        <div><List /></div>
      </div>
    );
  }
}

export default App;