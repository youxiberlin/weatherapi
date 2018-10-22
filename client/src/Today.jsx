import React, { Component } from 'react';
import Item from './Item'

class Today extends Component {
  render() {
    let data = this.props.data;
    let newData = [];
    newData.push({
      date: data[0].date,
      time: "Now",
      temp: data[0].temp,
      weather: data[0].weather
    })

    for (let i = 1; i < 5; i++) {
      newData.push({
        date: data[i].date,
        time: data[i].time,
        temp: data[i].temp,
        weather: data[i].weather
      })
    }
    console.log('newData', newData)

    const mappedItem = newData.map((el, i) =>
      <Item
        key={i}
        date={el.date}
        time={el.time}
        temp={el.temp}
        weather={el.weather}
      />
    )

    return (
      <div className='today'>
        <h1>Today</h1>
        <div className='item-container'>
          {mappedItem}
        </div>
      </div>
    );
  }
}

export default Today;