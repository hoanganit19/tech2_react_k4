import React from "react";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const { path } = useParams();
  const pattern = /.*?-(\d+)$/;
  const productIdArr = path.match(pattern);
  const productId = productIdArr[1];

  return <h1>Product Detail: {productId}</h1>;
};

export default ProductDetail;
