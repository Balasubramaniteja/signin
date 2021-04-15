import { TextField } from "@material-ui/core";
import React, { Component } from "react";
import "./App.css";

class SignUp extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
      error: ""
    };

    this.handlePassChange = this.handlePassChange.bind(this);
    this.handleUserChange = this.handleUserChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.dismissError = this.dismissError.bind(this);
  }

  dismissError() {
    this.setState({ error: "" });
  }

  handleSubmit(evt) {
    evt.preventDefault();

    if (!this.state.username) {
      return this.setState({ error: "Username is required" });
    }

    if (!this.state.password) {
      return this.setState({ error: "Password is required" });
    }

    return this.setState({ error: "" });
  }

  handleUserChange(evt) {
    this.setState({
      username: evt.target.value
    });
  }

  handlePassChange(evt) {
    this.setState({
      password: evt.target.value
    });
  }

  render() {
    return (
      <div className="Login">
        <form onSubmit={this.handleSubmit}>
          {this.state.error && (
            <h3 data-test="error" onClick={this.dismissError}>
              <button onClick={this.dismissError}>✖</button>
              {this.state.error}
            </h3>
          )}
          <div>
            <TextField
              id="standard-basic"
              label="userName"
              data-test="username"
              value={this.state.username}
              onChange={this.handleUserChange}
            />
          </div>
          <div>
            <TextField
              label="password"
              data-test="password"
              value={this.state.password}
              onChange={this.handlePassChange}
            />
          </div>
          <br />
          <div>
            <input type="submit" value="Log In" data-test="submit" />
          </div>
        </form>
      </div>
    );
  }
}
export default SignUp;
