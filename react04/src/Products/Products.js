import React from "react";
import { withContext } from "../StateProvider/withContext";

const Products = ({ context }) => {
  const { msg } = context.data;

  const handleChange = () => {
    const { setMsg } = context.dispatch;
    setMsg(`Hello World`);
  };

  return (
    <div>
      <h1>Product: {msg}</h1>
      <button onClick={handleChange}>Change</button>
    </div>
  );
};

export default withContext(Products);
