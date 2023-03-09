import React, { Component } from "react";
import { withRouter } from "../Services/withRouter";

export class Products extends Component {
  constructor(props) {
    super(props);
  }

  handleOrder = () => {
    const { navigate } = this.props;
    navigate("/thanh-cong");
  };

  render() {
    console.log(window.location);
    const search = new URLSearchParams(window.location.search);
    console.log(search.get("keyword"));
    console.log(search.get("category"));
    return (
      <div>
        <h1>Products</h1>
        <button
          type="button"
          className="btn btn-primary"
          onClick={this.handleOrder}
        >
          Đặt hàng
        </button>
      </div>
    );
  }
}

export default withRouter(Products);
