import React, { Component } from 'react';
import Today from './Today';
import OtherDays from './OtherDays';

class List extends Component {
  render() {
    let today = new Date();
    let dd = today.getDate();
    let mm = today.getMonth() + 1;
    let date = mm + '-' + dd;

    const newArray = [];
    const data = this.props.data
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

    sortedByDate[1].push(...restArray.slice(0, 8))
    sortedByDate[2].push(...restArray.slice(8, 16))
    sortedByDate[3].push(...restArray.slice(16, 24))
    sortedByDate[4].push(...restArray.slice(24, 32))
    console.log('sortedByDate', sortedByDate)

    return (
      <div>
        <Today />
        <h3>{sortedByDate[1][0].date}</h3>
        <OtherDays data={sortedByDate[1]} />
        <h3>{sortedByDate[2][0].date}</h3>
        <OtherDays data={sortedByDate[2]} />
        <h3>{sortedByDate[3][0].date}</h3>
        <OtherDays data={sortedByDate[3]} />
        <h3>{sortedByDate[4][0].date}</h3>
        <OtherDays data={sortedByDate[4]} />
      </div>
    );
  }
}

export default List;