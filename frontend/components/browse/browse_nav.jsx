import React from 'react';
import { Link } from 'react-router-dom';

const BrowseNav = (props) => {
  return(
    <div className="tabs-container">
    <ul className="tabs-list">
      <li className="content-tab">
        <Link to="/browse/artists">
          Artists
        </Link>
      </li>
      <li className="content-tab">
        <Link to="/browse/albums">
          Albums
        </Link>
      </li>
      <li className="content-tab">
        <Link to="/browse/songs">
          Trending Songs
        </Link>
      </li>
    </ul>
    </div>
  )
}

export default BrowseNav
