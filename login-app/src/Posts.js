import "./Login.css";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import Comments from "./Comments";

class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      postMessage: [],
    };
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => {
        this.setState({
          postMessage: json,
        });
      });
  }
  arrayFilter(id) {
    return this.state.postMessage.filter((post) => post.userId === id);
  }

  render() {
    const userArray = JSON.parse(localStorage.getItem("data"));
    const filteredMessage = this.arrayFilter(userArray.id);
    return (
      <div>
        <header>
          <Link to="/details" className="log-out">
            View Profile
          </Link>
        </header>

        <div className="app">
          <h1>
            Hi {userArray.name} , UserId:{userArray.id}{" "}
          </h1>
          <h2> Your posts are : </h2>
          {filteredMessage.map((post) => (
            <Link to="/comments">
              <ul>
                <li> {post.title} </li>
              </ul>
            </Link>
          ))}
        </div>
      </div>
    );
  }
}

export default Posts;
