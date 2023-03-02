import React, { Component, memo } from "react";
import { preventRender } from "./preventRender";

class Content extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log("re-render");
    return <h2>Content: {this.props.count}</h2>;
  }
}

export default memo(Content);

/*
Yêu cầu: Viết Higher Order Component để giải quyết bài toán ngăn Re-Render 
=> Nếu props thay đổi => Vẫn re-render bình thường
Component: PreventRender
*/
