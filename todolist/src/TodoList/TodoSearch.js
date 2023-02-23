import React, { Component } from "react";

export class TodoSearch extends Component {
  constructor(props) {
    super(props);
  }

  handleChange = (e) => {
    const { onSearch } = this.props;
    onSearch(e.target.value);
  };

  render() {
    return (
      <div>
        <input
          type="search"
          className="form-control"
          placeholder="Search"
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

export default TodoSearch;
