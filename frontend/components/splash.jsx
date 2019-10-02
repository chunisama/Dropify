import React from 'react';
import { Link, NavLink } from 'react-router-dom';

class Splash extends React.Component{
  render(){
    return(
      <div>
        <nav className="nav-links">
        <div className="app-logo">
          <div className="logo">
            <img className="app-img" src="../../assets/Spotify_Icon_RGB_White.png"/>
             &nbsp;
            <h1 className="app-title">Dropify</h1>
          </div>
          <div className="nav-buttons">
            <button><NavLink to="/signup">SIGN UP</NavLink></button>
            &nbsp; &nbsp; &nbsp; &nbsp; 
            <button><NavLink to="/login">SIGN IN</NavLink></button>
          </div>
        </div>
        </nav>
        <div className="center-greeting">
        <h1>Music for everyone.</h1>
        <h4>Find your sound and rock on.</h4>
          <div>
            <img src="https://www.scdn.co/i/home/hero-burst.svg"/>
          </div>
        <button><NavLink to="/signup">Get Dropify for free!</NavLink></button>
        </div>
      </div>
    )
  }
}

export default Splash;