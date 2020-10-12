import React, {Component} from 'react';
import '../styles/App.css';
import { BrowserRouter, NavLink, Route } from 'react-router-dom';
import Home from './Home';
import Profile from './Profile';
import About from './About';
// import "jquery/dist/js/jquery.js"
// import "bootstrap/dist/css/bootstrap.css";
// import 'bootstrap/dist/js/bootstrap';
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <h1>TOP</h1>
        <NavLink className="link" exact to="/" activeStyle={{
                textDecoration: "underline",
              }}>Home</NavLink>
        <NavLink className="link" exact to="/my-profile" activeStyle={{
                textDecoration: "underline",
              }}>My Profile</NavLink>
        <NavLink className="link" exact to="/about-us" activeStyle={{
                textDecoration: "underline",
              }}>About Us</NavLink>
        <Route exact path="/" component={Home}/>
        <Route exact path="/my-profile" component={Profile}/>
        <Route exact path="/about-us" component={About}/>
      </BrowserRouter>
    );
  }
}

export default App;
