import React, { Component } from 'react';

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
      defaultDisplay.push(i)
    }
    this.setState({ display: defaultDisplay, loading: false })
  }

  render() {

    console.log('otherdays: this.state.display', this.state.display)

    console.log('otherdays', this.props.data)
    return (
      <div>
        <h3>{this.props.data[0].date}</h3>
        <div>
          <div>
            {this.props.data[0].time}
            {this.props.data[0].temp}
            {this.props.data[0].weather}
          </div>
          <div>
            {this.props.data[2].time}
            {this.props.data[2].temp}
            {this.props.data[2].weather}
          </div>
          <div>
            {this.props.data[4].time}
            {this.props.data[4].temp}
            {this.props.data[4].weather}
          </div>
          <div>
            {this.props.data[6].time}
            {this.props.data[6].temp}
            {this.props.data[6].weather}
          </div>
        </div>
      </div>
    );
  }
}

export default OtherDays;