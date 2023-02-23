import React, { Component } from "react";

export class Products extends Component {
  constructor() {
    super();
    this.state = {
      products: [],
    };
    console.log("1. Constructor");
    this.timerInterval = null;
  }

  getProducts = async () => {
    const response = await fetch("http://localhost:3004/products");
    
    const data = await response.json();
    this.setState({ products: data });
  };

  componentDidMount() {
    console.log("3. componentDidMount");
    //this.getProducts();
    //Phương thức này sẽ được gọi khi hàm render() chạy lần đầu tiên
    //Hay nói cách khác là component được mounted
    this.timerInterval = setInterval(() => {}, 1000);
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("4. componentDidUpdate");
    //Chạy từ lần re-render thứ 2 trở đi
    //Ví dụ:
    /*
    Khi bấm nút LoadData
    - Call api 
    - setState
    - Chạy hàm render()
    - Chạy hàm componentDidUpdate()

    Lưu ý: Kiểm tra this.state và prevState (Hoặc this.props và prevProps) trước khi thực nội dung của hàm này
    */
  }

  componentWillUnmount() {
    console.log("5. componentWillUnmount");
    clearInterval(this.timerInterval);
  }

  render() {
    console.log("2. Render");
    return (
      <div>
        {this.state.products.map((product) => (
          <h2 key={product.id}>{product.name}</h2>
        ))}
        <button onClick={this.getProducts}>Load Data</button>
      </div>
    );
  }
}

export default Products;

/*
1. constructor
2. render
3. componentDidMount
4. componentDidUpdate => Lưu ý dễ xảy ra vòng lặp vô hạn
5. componentWillUnmount

*/
