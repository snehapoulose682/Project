import './Login.css';
import React from 'react';
import Posts from './Posts';
import { useHistory } from 'react-router';

const Details = () => {
    let history=useHistory();
    function handleSubmit() {
        history.push("/Posts")

        
    }
    const items = JSON.parse(localStorage.getItem('data'));
    return (
        <div className = "app">
            <h1> Hi {items.name} ,</h1>
                <p>Your details are :</p>
                <p> Username :{items.username} </p>
                <p> Email : {items.email} </p>
                <p> Address: {items.address.street},{items.address.suite},{items.address.city},
                {items.address.zipcode},{items.address.geo.lat}</p>
                <p> Phone : {items.phone}</p>
                <p> Website : {items.website}</p>
                <p> Company : {items.company.name},{items.company.catchPhrase},{items.company.bs} </p>
                <form onSubmit ={handleSubmit}>
                <button type = "submit">Posts</button>
                </form>
        </div>
    );
}

export default Details;

