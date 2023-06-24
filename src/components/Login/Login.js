import React, { useState } from "react";
import axios from "axios";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: "",
      password: "",
      successMessage: "",
    };
  }

  handleChange = (e) => {
    const { id, value } = e.target;
    this.setState((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  handleSubmitClick = (e) => {
    e.preventDefault();
    if (this.state.userId.length && this.state.password.length) {
      let reqBody = {
        username: this.state.userId,
        password: this.state.password,
      };
      axios
        .post("http://localhost:4040/api/V1/Data_Reports/loginService", reqBody)
        .then(
          (response) => {
            console.log(response);
            if (response.status == 200) {
              this.setState((prevState) => ({
                ...prevState,
                successMessage: "Login Successfulll",
              }));
              console.log(this.state);
            }
          },
          (error) => {
            console.log(error);
          }
        );
    }
  };

  render() {
    return (
      <div>
        <div className="card col-12 col-lg-4 login-card mt-2 hv-center">
          <form>
            <div className="form-group text-left">
              <label htmlFor="exampleInputEmail1">User ID</label>
              <input
                type="text"
                className="form-control"
                id="userId"
                placeholder="User ID"
                value={this.state.userId}
                onChange={this.handleChange}
              />
            </div>
            <div className="form-group text-left">
              <label htmlFor="exampleInputPassword1">Password</label>
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="Password"
                value={this.state.password}
                onChange={this.handleChange}
              />
            </div>
            <button
              type="submit"
              className="btn btn-primary"
              onClick={this.handleSubmitClick}
            >
              {" "}
              Login{" "}
            </button>
          </form>
        </div>
        <div>
          <p>{this.state.successMessage}</p>
        </div>
      </div>
    );
  }
}

export default Login;
