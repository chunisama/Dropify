import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { openModal, setModalComponent } from '../../actions/modal_actions';

const BrowseNav = (props) => {
  const url = props.location.pathname
  return(
    <div className="tabs-container">
    <ul className="tabs-list">
      <li className="content-tab">
        <Link to="/browse/artists" className={"app-link" + ((url === '/browse/artists') ? '-active' : '')}>
          Artists
        </Link>
      </li>
      <li className="content-tab">
        <Link to="/browse/albums" className={"app-link" + ((url === '/browse/albums') ? '-active' : '')}>
          Albums
        </Link>
      </li>
      <li className="content-tab">
        <Link to="/browse/songs" className={"app-link" + ((url === '/browse/songs') ? '-active' : '')}>
          Trending Songs
        </Link>
      </li>
      <li className="content-tab">
        <Link to="/browse/playlists" className={"app-link" + ((url === '/browse/playlists') ? '-active' : '')}>
          Playlists
        </Link>
      </li>
      <li className="content-tab">
        <button className="create-modal-button" onClick={() => {props.openModal(); props.setModalComponent('create')}}>
          New Playlist
        </button>
      </li>
    </ul>
    </div>
  )
}

const mdp = dispatch => ({
  openModal: () => dispatch(openModal()),
  setModalComponent: type => dispatch(setModalComponent(type)),
})

export default withRouter(connect(null, mdp)(BrowseNav));