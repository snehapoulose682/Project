import React, { Component } from "react";
import "./Login.css";

class Details extends Component {
  constructor(props) {
    super(props);
    this.state = {
      detailsArray: [],
    };
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => {
        this.setState({
          detailsArray: json,
        });
      });
  }

  render() {
    const items = JSON.parse(localStorage.getItem("data"));
    return (
      <div>
        <div className="app">
          <h1> Hi {items.name} </h1>
          <p>Your details are :</p>
          <p> Username :{items.username} </p>
          <p> Email : {items.email} </p>
          <p>
            {" "}
            Address: {items.address.street},{items.address.suite},
            {items.address.city},{items.address.zipcode},{items.address.geo.lat}
          </p>
          <p> Phone : {items.phone}</p>
          <p> Website : {items.website}</p>
          <p>
            {" "}
            Company : {items.company.name},{items.company.catchPhrase},
            {items.company.bs}{" "}
          </p>
        </div>
      </div>
    );
  }
}

export default Details;
