import React from "react";

class Clock extends React.Component {
  constructor() {
    super();
    this.state = {
      date: new Date(),
    };
  }
  componentDidMount() {
    this.timer = setInterval(() => this.tick(), 1000);
  }
  componentWillUnmount() {
    clearInterval(this.timer);
  }
  tick() {
    this.setState({
      date: new Date(),
    });
  }
  render() {
    return <h1>class组件形式：{this.state.date.toLocaleTimeString()}</h1>;
  }
}

export default Clock;
