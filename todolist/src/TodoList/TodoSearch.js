import React, { Component } from "react";
import { DebounceInput } from "react-debounce-input";

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
        {/* <input
          type="search"
          className="form-control"
          placeholder="Search"
          onChange={this.handleChange}
        /> */}
        <DebounceInput
          placeholder="Search"
          className="form-control"
          debounceTimeout={300}
          type="search"
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

export default TodoSearch;
