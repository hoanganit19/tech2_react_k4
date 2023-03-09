import React from "react";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const { productId, slug } = useParams();
  console.log(productId, slug);

  return <h1>Product Detail: {productId}</h1>;
};

export default ProductDetail;
