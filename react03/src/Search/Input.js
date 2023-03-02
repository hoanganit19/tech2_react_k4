import React, { Component, forwardRef } from "react";

const Input = (props, ref) => {
  return (
    <div>
      <h2>{props.name}</h2>
      <input ref={ref} type="text" placeholder="Search" />
    </div>
  );
};

export default forwardRef(Input); //Higher order component (HOC)
