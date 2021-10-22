import './App.css';
import React, { Component } from "react"

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      username: "",
      password: ""
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }
  handleSubmit(event) {
    alert(' The entered username is : ' + this.state.username);
    alert('The entered password is : ' + this.state.password);
    event.preventDefault();
  }
  render() {
    return (
      <div className="app">
        <h1>Login Page </h1>
        <form onSubmit={this.handleSubmit}>
          <label>Username:
            <input type="text"
              className="username-input"
              name="username"
              value={this.state.username}
              onChange={this.handleChange} />
          </label>
          <br />
          <label>Password:
            <input type="password"
              className="password-input"
              name="password"
              value={this.state.password}
              onChange={this.handleChange} />
          </label>
          <br />
          <input type="submit" className="login-button" value="Login" />
        </form>
      </div>

    )
  }
}
export default App;
