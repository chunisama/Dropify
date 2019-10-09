import React from 'react';
import { Link } from 'react-router-dom';

const BrowseNav = (props) => {
  return(
    <div className="tabs-container">
      <div>
        <Link to="/browse/artists">
          Artists
        </Link>
      </div>
      <div>
        <Link to="/browse/albums">
          Albums
        </Link>
      </div>
      <div>
        <Link to="/browse/songs">
          Trending Songs
        </Link>
      </div>
    </div>
  )
}

export default BrowseNav
