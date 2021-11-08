import React, { Component } from "react";
import { Link } from "react-router-dom";
import Login from "./Login";
import { Redirect, withRouter } from "react-router";
import "./Login.css";

class Comments extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: [],
    };
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/comments")
      .then((response) => response.json())
      .then((json) => {
        this.setState({
          comments: json,
        });
      });
  }
  checkComment(id) {
    return this.state.comments.filter((comment) => comment.postId === id);
  }
  logoutHandler = (e) => {
    this.props.history.push("/");
    localStorage.removeItem("data");
  };
  render() {
    const commentArray = JSON.parse(localStorage.getItem("data"));
    const filteredComment = this.checkComment(commentArray.id);
    return (
      <div>
        <header>
          <button
            onClick={(e) => this.logoutHandler(e)}
            className="btn--log-out"
          >
            LOGOUT
          </button>
        </header>
        <div className="app">
          <h1>
            Hi {commentArray.name},PostId {commentArray.id}
          </h1>
          <h2>Your comments are:</h2>
          {filteredComment.map((comment) => (
            <ul>
              <li> {comment.body} </li>
            </ul>
          ))}
        </div>
      </div>
    );
  }
}

export default withRouter(Comments);
