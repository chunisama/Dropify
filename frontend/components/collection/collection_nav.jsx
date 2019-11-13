import React from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { openModal, setModalComponent } from '../../actions/modal_actions';

const CollectionNav = (props) => {
  const section = props.match.params.section;
  return (
    <div className="tabs-container">
      <ul className="tabs-list">
        <li className="content-tab">
          <Link to={'/collection/artists'}
            className={"app-link" + ((section === 'artists') ? ' active' : '')}>
            Artists
          </Link>
        </li>
        <li className="content-tab">
          <Link to={'/collection/albums'}
            className={"app-link" + ((section === 'albums') ? ' active' : '')}>
            Albums
          </Link>
        </li>
        <li className="content-tab">
          <Link to={'/collection/songs'}
            className={"app-link" + ((section === 'songs') ? ' active' : '')}>
            Liked Songs
          </Link>
        </li>
        <li className="content-tab">
          <Link to={'/collection/playlists'}
            className={"app-link" + ((section === 'playlists') ? ' active' : '')}>
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
  );
};

const mdp = dispatch => ({
  openModal: () => dispatch(openModal()),
  setModalComponent: type => dispatch(setModalComponent(comp)),
})

export default connect(null, mdp)(CollectionNav);