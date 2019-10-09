import React from 'react';
import { Link } from 'react-router-dom';

const SidebarNav = (props) => {
  return(
    <div className="sidebar-container">
      <div>
        <Link to="/browse">
          Home
        </Link>
      </div>
      <div>
        <Link to="/search">
          Search
        </Link>
      </div>
      <div>
        <Link to="/collection">
          Your Library
        </Link>
      </div>
    </div>
  )
}

export default SidebarNav;