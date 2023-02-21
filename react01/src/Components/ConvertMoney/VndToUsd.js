import React, { Component } from "react";

import Config from "./Config.json";

const { rate } = Config;
export class VndToUsd extends Component {
  constructor(props) {
    super(props);
  }

  handleChangeValue = (e) => {
    const vnd = e.target.value;
    const usd = parseFloat(vnd / rate).toFixed(2);
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
