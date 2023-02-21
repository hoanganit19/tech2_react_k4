import React, { Component } from "react";

export class VndToUsd extends Component {
  constructor(props) {
    super(props);
    this.rate = 23500;
  }

  handleChangeValue = (e) => {
    const vnd = e.target.value;
    const usd = parseFloat(vnd / this.rate).toFixed(2);
    this.props.onGetUsd(usd, vnd);
  };
  render() {
    const { vnd } = this.props;

    return (
      <div>
        <label>VND</label>
        <input
          type="number"
          placeholder="VND"
          name="vnd"
          // defaultValue="0"
          value={vnd}
          onChange={this.handleChangeValue}
        />
      </div>
    );
  }
}

export default VndToUsd;
