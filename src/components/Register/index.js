import React, { Component } from "react";

class Register extends Component {
  state = {
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
  };

  handleNameChange = (event) => {
    this.setState({ name: event.target.value });
  };

  handleEmailChange = (event) => {
    this.setState({ email: event.target.value });
  };

  handlePasswordChange = (event) => {
    this.setState({ password: event.target.value });
  };

  handlePasswordConfirmationChange = (event) => {
    this.setState({ password_confirmation: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    alert(
      JSON.stringify({
        name: this.state.name,
        email: this.state.email,
        password: this.state.password,
        passwordConfirmation: this.state.password_confirmation,
      })
    );
  };
  render() {
    return (
      <>
        <h1>Register</h1>
        <form onSubmit={this.handleSubmit}>
          <div>
            <div>
              <label htmlFor="name">Name</label>
            </div>
            <div>
              <input
                name="name"
                placeholder="Enter Your Full Name"
                value={this.state.name}
                onChange={this.handleNameChange}
              />
            </div>
          </div>
          <div>
            <div>
              <label htmlFor="email">Email</label>
            </div>
            <div>
              <input
                name="email"
                placeholder="Your Email"
                value={this.state.email}
                onChange={this.handleEmailChange}
              />
            </div>
          </div>
          <div>
            <div>
              <label htmlFor="password">Password</label>
            </div>
            <div>
              <input
                name="password"
                placeholder="Password"
                value={this.state.password}
                onChange={this.handlePasswordChange}
              />
            </div>
          </div>
          <div>
            <div>
              <label htmlFor="password_confirmation">Confirm Password</label>
            </div>
            <div>
              <input
                name="password_confirmation"
                placeholder="Repeat Your Password"
                value={this.state.password_confirmation}
                onChange={this.handlePasswordConfirmationChange}
              />
            </div>
          </div>
          <button type="submit">Register</button>
        </form>
      </>
    );
  }
}

export default Register;
