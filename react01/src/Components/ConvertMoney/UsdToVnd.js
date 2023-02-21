import React, { Component } from "react";

export class UsdToVnd extends Component {
  constructor(props) {
    super(props);
    this.rate = 23500;
  }

  handleChangeValue = (e) => {
    const usd = e.target.value;
    //Đổi usd => vnd
    const vnd = usd * this.rate;

    this.props.onGetVnd(vnd, usd);
  };

  render() {
    const { usd } = this.props;

    return (
      <div>
        <label>USD</label>
        <input
          type="number"
          placeholder="USD"
          name="usd"
          //   defaultValue="0"
          value={usd}
          onChange={this.handleChangeValue}
        />
      </div>
    );
  }
}

export default UsdToVnd;
