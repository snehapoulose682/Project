import React from 'react';
import Header from './Header';
import LoginUser from './Login';
import Posts from './Posts';
import { Route,Switch, BrowserRouter as Router } from 'react-router-dom';
import Details from './Details';

class App extends React.Component {

    constructor() {
        super();
    }

    render() {
        return (
            <Router>
                <Route path="/Login">
                    <LoginUser />
                </Route>
                <Route path="/Details">
                    <Details />
                </Route>
                <Route path = "/Posts">
                    <Posts/>
                </Route>
            </Router>
        )
    }
}

export default App;