import './Login.css';
import Details from './Details';
import { withRouter } from 'react-router';
import React, { Component } from "react"
import Header from './Header';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      users: []
    };
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }
  handleSubmit(event) {
    event.preventDefault();
    const userid = this.state.username
    const pswd = this.state.password
    const users = this.state.users
    const { history } = this.props
    users.filter((user) => {
      if (userid === user.email && pswd === user.username)
      {
        localStorage.setItem('data',JSON.stringify(user));
        history.push('/Details');

      }



    })
    //console.log(loggedInUser)
  }
  componentDidMount() {
    fetch(
      "https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => {
        this.setState({
          users: json
        });
      })
  }

  render() {
    return (
      <div className="app">
        <Header/>
        <h1> LOGIN </h1>
        <form onSubmit={this.handleSubmit}>
          <label>Username :
            <input type="text"
              className="username-input"
              name="username"
              value={this.state.username}
              onChange={this.handleChange} required />
          </label>
          <br />
          <label>Password :
            <input type="password"
              className="password-input"
              name="password"
              value={this.state.password}
              onChange={this.handleChange} required />
          </label>
          <br />
          <button type="submit" className="login-button">
            Login
          </button>
        </form>

      </div>
    )
  }
}
const LoginUser = withRouter(Login);
export default LoginUser;
