import React, { Component } from "react";
import UsdToVnd from "./UsdToVnd";
import VndToUsd from "./VndToUsd";

export class ConvertMoney extends Component {
  constructor() {
    super();
    this.state = {
      vnd: 0,
      usd: 0,
    };
  }

  handleGetVnd = (vnd, usd) => {
    this.setState({
      vnd: vnd,
      usd: usd,
    });
  };

  handleGetUsd = (usd, vnd) => {
    this.setState({
      usd: usd,
      vnd: vnd,
    });
  };

  render() {
    const { vnd, usd } = this.state;
    return (
      <div style={{ margin: "3%" }}>
        <UsdToVnd usd={usd} onGetVnd={this.handleGetVnd} />
        <VndToUsd vnd={vnd} onGetUsd={this.handleGetUsd} />
      </div>
    );
  }
}

export default ConvertMoney;
