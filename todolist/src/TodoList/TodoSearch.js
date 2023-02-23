import React, { Component } from "react";

export class TodoSearch extends Component {
  render() {
    return (
      <div>
        <input type="search" className="form-control" placeholder="Search" />
      </div>
    );
  }
}

export default TodoSearch;
