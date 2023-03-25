import React from "react";
import useColor from "../Hooks/useColor";
import TextField from "./TextField";

const Form = () => {
  const { color } = useColor();

  return (
    <div style={{ margin: "5%", background: color }}>
      <TextField name={"username"} type={"text"} text={"Username"} />
      <TextField name={"password"} type={"password"} text={"Password"} />
      <TextField name={"email"} type={"email"} text={"Email"} />
    </div>
  );
};

export default Form;
