import React, { Component } from "react";

export class Products extends React.Component {
  constructor(props) {
    super(props);

    this.msg = "Unicode Academy";

    this.state = {
      title: props.name,
    };
    /*
    - Lưu trữ dữ liệu trong nội bộ component
    - Thay đổi dữ liệu (Data) trong Component
    - Khi State thay đổi => Component sẽ re-render
    - Nếu muốn thay đổi giá trị State => dùng hàm this.setState()
    - Không được phép thay đổi trực tiếp this.state
    - Khi cập nhật setState() => giá trị state sẽ không thay đổi luôn, chỉ nhìn thấy state thay đổi ở lần render tiếp theo
    */
  }

  handleClick = () => {
    // console.log("Click me");
    // console.log(this);
    // console.log(this.msg);
    this.setState({
      title: "Vừa thay đổi",
    });
  };

  render() {
    console.log("re-render");
    const { name } = this.props;
    const { title } = this.state;

    return (
      <div>
        <h1>Products: {name}</h1>
        <h1>{title}</h1>
        <h2>{this.msg}</h2>
        <button onClick={this.handleClick}>Click me</button>
      </div>
    );
  }
}

export default Products;
