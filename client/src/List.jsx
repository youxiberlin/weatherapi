import React, { Component } from 'react';
import Today from './Today';
// import OtherDays from './OtherDays';
import Others from './Others';

class List extends Component {
  listDays(day) {
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun", "Mon", "Tue", "Wed"];
    let displayDays = [];
    for (let i = day + 1; i < day + 5; i++) {
      displayDays.push(days[i])
    }
    return displayDays;
  }

  render() {
    let today = new Date();
    let dd = today.getDate();
    let mm = today.getMonth() + 1;
    let date = mm + '-' + dd;
    let day = today.getDay();
    let displayDays = this.listDays(day)

    const newArray = [];
    const data = this.props.data
    if (this.props.data) {
      for (let i = 0; i < data.length; i++) {
        newArray.push({
          date: data[i].dt_txt.split(' ')[0].slice(5, 10),
          time: data[i].dt_txt.split(' ')[1].slice(0, 5),
          temp: Math.round(data[i].main.temp - 273.15),
          temp_max: Math.round(data[i].main.temp_max - 273.15),
          temp_min: Math.round(data[i].main.temp_min - 273.15),
          weather: data[i].weather[0].main,
          weather_more: data[i].weather[0].description
        })
      }
    }



    let sortedByDate = [];
    for (let i = 0; i < 5; i++) {
      sortedByDate.push([])
    }
    for (let i = 0; i < newArray.length; i++) {
      if (newArray[i].date === date) {
        sortedByDate[0].push(newArray[i])
      }
    }

    const firstDayLength = sortedByDate[0].length;
    const restArray = newArray.slice(firstDayLength, newArray.length)

    sortedByDate[1].push(...restArray.slice(0, 8), displayDays[0])
    sortedByDate[2].push(...restArray.slice(8, 16), displayDays[1])
    sortedByDate[3].push(...restArray.slice(16, 24), displayDays[2])
    sortedByDate[4].push(...restArray.slice(24, 32), displayDays[3])

    let todayData = sortedByDate[0].concat(sortedByDate[1])



    return (
      <div>
        <Today
          data={todayData}
        />
        <Others data={sortedByDate[1]} />
        <Others data={sortedByDate[2]} />
        <Others data={sortedByDate[3]} />
        <Others data={sortedByDate[4]} />
      </div>
    );
  }
}

export default List;