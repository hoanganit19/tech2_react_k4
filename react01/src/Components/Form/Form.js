import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import clsx from "clsx";

export class Form extends Component {
  constructor() {
    super();
    this.state = {
      form: {
        email: "",
        password: "",
      },
      errors: {
        email: "",
        password: "",
      },
    };
  }

  handleSubmitForm = (e) => {
    e.preventDefault();
    const { email, password } = this.state.form;

    const errors = {};

    //errors.field.rule

    if (email.trim() == "") {
      errors.email = "Email is required";
    }

    if (password.trim() == "") {
      errors.password = "Password is required";
    }

    this.setState({ errors });
  };

  handleChangeValue = (e) => {
    //console.log(e.target.name, e.target.value);
    const data = { ...this.state.form };
    //data.email = 'a';
    data[e.target.name] = e.target.value;
    this.setState({ form: data });
  };

  render() {
    const { errors } = this.state;

    return (
      <div className="container py-3">
        <div className="row justify-content-center">
          <div className="col-6">
            <h2 className="text-center">Login</h2>
            <hr />
            <form action="" method="get" onSubmit={this.handleSubmitForm}>
              <div className="mb-3">
                <label htmlFor="">Email</label>
                <input
                  type="text"
                  placeholder="Email"
                  name="email"
                  className={clsx("form-control", errors.email && "is-invalid")}
                  onChange={this.handleChangeValue}
                />
                {errors.email && (
                  <div className="invalid-feedback">{errors.email}</div>
                )}
              </div>

              <div className="mb-3">
                <label htmlFor="">Password</label>
                <input
                  type="password"
                  placeholder="Password"
                  name="password"
                  className={clsx(
                    "form-control",
                    errors.password && "is-invalid"
                  )}
                  onChange={this.handleChangeValue}
                />
                {errors.password && (
                  <div className="invalid-feedback">{errors.password}</div>
                )}
              </div>

              <div className="d-grid">
                <button className="btn btn-primary">Login</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Form;
