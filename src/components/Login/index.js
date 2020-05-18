import React, { Component } from "react";

class index extends Component {
  state = {
    email: "",
    password: "",
  };

  handleEmailChange = (event) => {
    this.setState({ email: event.target.value });
  };

  handlePasswordChange = (event) => {
    this.setState({ password: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    alert(
      JSON.stringify({
        email: this.state.email,
        password: this.state.password,
      })
    );
  };

  render() {
    return (
      <>
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
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
          <button type="submit">Login</button>
        </form>
      </>
    );
  }
}

export default index;
