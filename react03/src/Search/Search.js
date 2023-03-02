import React, { Component, createRef } from "react";
import Input from "./Input";
import { Color } from "./Color";

export class Search extends Component {
  constructor() {
    super();
    this.inputRef = createRef();
  }

  componentDidMount = () => {
    console.log([this.inputRef.current]);
    this.inputRef.current.focus();
    this.inputRef.current.style.border = "1px solid red";
    this.inputRef.current.style.outline = "none";
  };

  handleClick = () => {
    console.log("click");
    this.inputRef.current.style.fontSize = "20px";
  };

  render() {
    return (
      <div style={{ margin: "3%" }}>
        <Input name="Hoàng An" ref={this.inputRef} />
        <button type="button" onClick={this.handleClick}>
          Button
        </button>
      </div>
    );
  }
}

export default Color(Search);
