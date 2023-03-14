import React, { useState } from "react";

const Counter = () => {
  console.log("re-render");
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    //setCount(count + 1);
    setCount((prevCount) => prevCount + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };

  //   for (let i = 1; i <= 100; i++) {
  //     console.log(i);
  //   }

  return (
    <div style={{ margin: "5%" }}>
      <h1>Count: {count}</h1>
      <button onClick={handleDecrement}>-</button>
      <button onClick={handleIncrement}>+</button>
    </div>
  );
};

export default Counter;
