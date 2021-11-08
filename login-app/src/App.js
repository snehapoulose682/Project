import React from "react";
import Header from "./Header";
import Login from "./Login";
import Posts from "./Posts";
import {Route,Switch,BrowserRouter as Router,Redirect,} from "react-router-dom";
import Details from "./Details";
import Comments from "./Comments";

function ProtectedRoute(props) 
{
  const isAuthenticated = JSON.parse( localStorage.getItem("data"));
  if (isAuthenticated && isAuthenticated.username && isAuthenticated.username.length > 0 && isAuthenticated.email) 
  {
    return <Route {...props} />;
  } 
  else 
  {
    return <Redirect to="/" />;
  }
}
class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
        <ProtectedRoute path ="/details" component ={Details}></ProtectedRoute>
        <ProtectedRoute path = "/posts" component ={Posts}></ProtectedRoute>
        <ProtectedRoute path = "/comments" component ={Comments}></ProtectedRoute>
        </Switch>
      </Router>
    );
  }
}

export default App;
