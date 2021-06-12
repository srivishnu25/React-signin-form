import React, { Component,PureComponent, useEffect, useState } from 'react';
import axios from 'axios';
import moment from 'moment';
import {BrowserRouter as Router,Switch,Link,Route,Redirect, useParams} from "react-router-dom";
import Signin from '../Signin/Signin';
import Signup from '../Signup/Signup';
import UserDetails from '../userDetails/userDetails';

const NavBar = () => {
    return (<>
    <Router>
     <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <a className="navbar-brand" href="#">Navbar</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavDropdown">
    <ul className="navbar-nav">
      <li className="nav-item ">
        <Link to="/home" className="nav-link">Home </Link>
      </li>
      <li className="nav-item">
      <Link to="/features" className="nav-link">Features</Link>
      </li>
      <li className="nav-item">
      <Link to="/pricing" className="nav-link">Pricing</Link>
      </li>
      <li className="nav-item">
      <Link to="/signin" className="nav-link">Sign in</Link>
      </li>
      <li className="nav-item">
      <Link to="/signup" className="nav-link">Sign up</Link>
      </li>
    </ul>
  </div>
</nav>
     <Switch>
        <Route path="/home"   excat component={Home}/>
        <Route path="/features"  component={Features}/>
        <Route path="/pricing"  component={Pricing}/>
        <Route path="/signin"  component={Signin}/>
        <Route path="/signup"  component={Signup}/>
      </Switch>
</Router>


    </>  );
}
 
export default NavBar;

const Home = () => {
  const abc = ()=>{
    if(localStorage.getItem('UserDetails') !== null)
    return true;
    else
    return false; 
  }
    return (<>
    <h1>Home Page</h1>
    {abc() && <UserDetails/>}
    
    </>);
  }

const Features = () => {
    return (<h1>Features Page</h1>);
  }
  
const Pricing = () => {
    return (<h1>Pricing Page</h1>);
}