import React, { useState } from "react";

const Form = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const handleChangeValue = (e) => {
    //console.log(e.target.name, e.target.value);
    const data = { ...form };
    data[e.target.name] = e.target.value;
    setForm(data);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = form;
    const errorsData = {};
    if (email.trim().length == 0) {
      errorsData.email = "Vui lòng nhập email";
    }

    if (password.trim().length == 0) {
      errorsData.password = "Vui lòng nhập mật khẩu";
    }

    setErrors(errorsData);
  };

  return (
    <div style={{ margin: "5%" }}>
      <form action="" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="">Email: </label> <br />
          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChangeValue}
          />
          <br />
          {errors.email && <span style={{ color: "red" }}>{errors.email}</span>}
        </div>
        <div>
          <label htmlFor="">Password: </label> <br />
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChangeValue}
          />
          <br />
          {errors.password && (
            <span style={{ color: "red" }}>{errors.password}</span>
          )}
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Form;
