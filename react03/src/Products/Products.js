import React, { Component } from "react";
import { Color } from "../Search/Color";

export class Products extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <h1>Products: {this.props.name}</h1>;
  }
}

export default Color(Products);
