import React, { Component } from 'react';

class List extends Component {
  render() {
    let today = new Date();
    let dd = today.getDate();
    let mm = today.getMonth() + 1;
    let date = mm + '-' + dd;

    console.log('@List', this.props.data)
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
    console.log('newArray', newArray)

    let sortedByDate = [];
    for (let i = 0; i < newArray.length; i++) {
      if (newArray[i].date === date) {
        sortedByDate.push(newArray[i])
      }
    }

    console.log('sortedByDate: ', sortedByDate)





    return (
      <div>data</div>
    );
  }
}

export default List;