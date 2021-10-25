import React, { Component } from "react";
class Fetch extends Component {
    constructor(props) {
        super(props);

        this.state = {
            items: [],
            DataisLoaded: false
        };
    }

    componentDidMount() {
        fetch(
            "https://jsonplaceholder.typicode.com/users")
            .then((res) => res.json())
            .then((json) => {
                this.setState({
                    items: json,
                    DataisLoaded: true
                });
            })
    }
    render() {
        const { DataisLoaded, items } = this.state;
        if (!DataisLoaded) return <div>
            <h1> Pleses wait some time.... </h1> </div>;

        return (
            <div className="container">
                {
                    items.map((item) => (
                        <ol key={item.id} >
                            Name: {item.name},
                            User_Name: {item.email},
                            Password: {item.username},
                            Phone: {item.phone},
                            Website:{item.website}
                        </ol>
                    ))
                }
            </div>
        );
    }
}
export default Fetch;
