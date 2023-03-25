import React, { useMemo, useState, useCallback } from "react";

const Products = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0);

  const handleChange = useCallback((e) => {
    if (e.target.name == "name") {
      setName(e.target.value);
    } else {
      setPrice(e.target.value);
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setProducts(products.concat({ name, price }));
    setName("");
    setPrice(0);
  };

  //Xử lý logic
  //   const total = products.reduce((total, product) => {
  //     console.log("loop");
  //     return total + parseInt(product.price);
  //   }, 0);

  /*
  Hook useMemo(callback, deps)
  - Cache logic giữa các lần re-render
  - Phải return về giá trị
  - hàm useMemo trả về giá trị

  Hook useCallback(callback, deps)
  - Cache hàm giữa các lần re-render
  - Không phải return về giá trị
  - Hàm useCallback sẽ trả về 1 function

  Lưu ý:
  - Không spam useMemo và useCallback trong tất cả các trường hợp
  - Cứ code bình thường => Lúc nào chậm, phân tích rồi đưa useCallback, useMemo vào sau
  */

  const total = useMemo(() => {
    return products.reduce((total, product) => {
      console.log("loop");
      return total + parseInt(product.price);
    }, 0);
  }, [products]);
  //Khi nào products thay đổi => tính toán lại total

  //Chỉ khởi tạo hàm 1 lần sau khi component được mounted

  //Khi làm việc với State => muốn được dữ liệu mới nhất => cập nhật State dưới hình thức callback
  const handleIncrement = useCallback(() => {
    setCount((prevCount) => prevCount + 1);
  }, []);

  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            name="name"
            placeholder="Name..."
            onChange={handleChange}
            value={name}
          />
        </div>
        <div>
          <input
            type="number"
            name="price"
            placeholder="Prirce..."
            onChange={handleChange}
            value={price}
          />
        </div>
        <button type="submit">Add</button>
      </form>
      <hr />

      <h3>Total: {total}</h3>

      {products.map((product, index) => (
        <div key={index}>
          <p>Name: {product.name}</p>
          <p>Price: {product.price}</p>
        </div>
      ))}

      <h2>Count: {count}</h2>
      <button type="button" onClick={handleIncrement}>
        Up
      </button>
    </div>
  );
};

export default Products;
