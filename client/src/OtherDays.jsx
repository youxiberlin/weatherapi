import React, { Component } from 'react';
import Item from './Item';
import { Button } from 'reactstrap';

class OtherDays extends Component {
  constructor(props) {
    super(props)
    this.state = {
      display: [],
      loading: true,
    }

    this._loadDetail = this._loadDetail.bind(this)
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

    const mappedItem = this.state.display.map((el, i) =>
      <Item
        key={i}
        date={el.date}
        time={el.time}
        temp={el.temp}
        weather={el.weather}
      />
    )


    console.log('onclicked', this.state.display)
    return (
      <div>
        <div className='item-container'>
          {mappedItem}

        </div>
        <Button
          onClick={this._loadDetail}
        >more</Button>
      </div>
    );
  }

  _loadDetail() {
    this.setState({
      display: this.props.data
    })
  }
}

export default OtherDays;