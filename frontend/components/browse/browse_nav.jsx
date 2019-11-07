import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { openModal, setModalComponent } from '../../actions/modal_actions';

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
      <li className="content-tab">
        <Link to="/browse/playlists">
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

export default connect(null, mdp)(BrowseNav);