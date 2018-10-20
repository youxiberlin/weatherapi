import React, { Component } from 'react';
import Item from './Item';

class OtherDays extends Component {
  constructor(props) {
    super(props)
    this.state = {
      display: [],
      loading: true,
    }
  }

  componentDidMount() {
    const defaultDisplay = [];
    for (let i = 0; i < this.props.data.length; i++) {
      if (i % 2 === 0) {
        defaultDisplay.push(this.props.data[i])
      }
    }
    this.setState({ display: defaultDisplay, loading: false })
  }

  render() {
    if (this.state.loading) {
      return <div className='spinner'>loading.....</div>
    }

    console.log('otherdays: this.state.display', this.state.display)
    const mappedItem = this.state.display.map((el, i) =>
      <Item
        key={i}
        date={el.date}
        time={el.time}
        temp={el.temp}
        weather={el.weather}
      />
    )


    console.log('otherdays', this.props.data)
    return (
      <div className='item-container'>
        {mappedItem}
      </div>
    );
  }
}

export default OtherDays;