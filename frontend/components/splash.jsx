import React from 'react';
import { Link, NavLink } from 'react-router-dom';

class Splash extends React.Component{
  render(){
    return(
      <div className="splash-container">

        <section className="splash-gradient">
          <div className="bubbles"></div>
        </section>

      <div className="content">
        <header className="fixed-header">
        <div className="app-nav">
          <div className="logo">
            <img className="app-img" src="../../assets/Spotify_Icon_RGB_White.png"/>
             &nbsp;
            <h1 className="app-title">Dropify</h1>
          </div>
            <div className="nav-buttons">
              <div className="butt1">
                <Link to="/signup">Sign up</Link>
              </div>
                &nbsp; &nbsp; &nbsp; &nbsp; 
              <div className="butt2">
                <Link to="/login">Sign in</Link>
              </div>
            </div>
          </div>
        </header>
        <div className="center-greeting">
          <h1 className="first-greeting">Music for everyone.</h1>
          <h4 className="second-greeting">Drop your favorite sounds and rock on.</h4>
            <Link to="/signup"><button className="webplayer-button">Launch Web Player</button></Link>
        </div>
        <div className="footer-container">
          <footer className="footer">
            <div className="splash-footer-items">
              <div className="logo2">
                <div className="footer-title">
                <img className="app-img" src={window.whiteSpotifyURL} />
                &nbsp;
                <h1>Dropify</h1>
                </div>
              <h2 className="footer-title2">A Spotify Clone</h2>
              </div>
            </div>
          </footer>
        </div>
      </div>
      </div>
    )
  }
}

export default Splash;