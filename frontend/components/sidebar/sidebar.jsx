import React from 'react';
import { Link } from 'react-router-dom';

class Sidebar extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div className="sidebar-container">
        <div className="side-bar-logo">
          <img className="app-img" src={window.whiteSpotifyURL}/>
            &nbsp;
          <div className="sidebar-title">Dropify</div>
        </div>
        <div className="side-bar-nav">
          <div className="home-side">
            <i className="fas fa-home"></i>
            &nbsp;
            <Link to="/browse">
                Home
            </Link>
          </div>
          <div className="search-side">
            <i className="fas fa-search"></i>
            &nbsp;
            <Link to="/search">
              Search
            </Link>
          </div>
          <div className="collection-side">
            <i class="fas fa-book"></i>
            &nbsp;
            <Link to="/collection">
            Your Library
            </Link>
          </div>
        </div>
        <div className="user-controls-container">
          <button className="log-out-button"onClick={() => this.props.logout()}>Sign Out</button>
          <div className="username-label">{this.props.currentUser.username}</div>
        </div>
      </div>

    )
  }
}
export default Sidebar;



