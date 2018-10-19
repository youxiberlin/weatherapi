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
    this.callWeatherApi()
      .then(res => this.setState({ data: res.data, loading: false }))
      .catch(err => console.log(err));
  }


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

    console.log(this.state.data.list)
    const mappedList = this.state.data.list.map((el, i) =>
      <List
        key={i}
        time={el.dt_txt}
        temp={el.main.temp}
      />
    )

    return (
      <div className="App">
        <header className="App-header">
          header
        </header>
        <p className="App-intro">{this.state.response}</p>
        <div>{mappedList}</div>
      </div>
    );
  }
}

export default App;