import React, { Component } from "react";
import Content from "./Content";

export class Counter extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }

  handleIncrement = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  };

  render() {
    const { count } = this.state;

    return (
      <div style={{ margin: "3%" }}>
        <h1>{count}</h1>
        <Content count={count} />
        <button onClick={this.handleIncrement}>Up</button>
      </div>
    );
  }
}

export default Counter;
