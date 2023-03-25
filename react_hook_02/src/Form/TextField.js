import React, { useId } from "react";

const TextField = ({ text, type, name }) => {
  const id = useId();
  return (
    <div>
      <label htmlFor={id}>{text}</label> <br />
      <input type={type} id={id} name={name} placeholder={`${text}...`} />
    </div>
  );
};

export default TextField;
