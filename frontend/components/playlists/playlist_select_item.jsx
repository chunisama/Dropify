import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { closeModal } from '../../actions/modal_actions';
import { addPlaylistSong } from '../../actions/playlist_song_actions';

const PlaylistSelectItem = (props) => {
  if (this.props.playlists.length == 0){
    return (
      <div className="loading-icon"><i className="fas fa-spinner fa-spin"></i></div>
    )
  }
  return (
    <li className="index-item">
      <div className="content-item">
        <Link className="content-item0play" to={`/playlists/${props.playlist.id}`}>
          <div className="svg-container-item" onClick={() => {props.closeModal();
          props.addPlaylistSong({playlist_id: props.playlist.id, song_id: props.songId})}}>
          {/* <svg viewBox="0 0 300 300" className="rela-block svg item">
            <path d="M 150 100 L 150 200" strokeWidth="5"/>
            <path d="M 100 150 L 200 150" strokeWidth="5"/>
          </svg> */}
          </div>
        </Link>
        <div className="playlist-title">{props.playlist.title}</div>
      </div>
      <div className="content-primary-text">{props.playlist.title}</div>
      <div className="content-secondar-text">{props.playlist.track_ids.length} Song(s)</div>
    </li>
  );
};

const msp = (state) => ({
  songId: state.ui.modal.modalProps.songId,
});

const mdp = (dispatch) => ({
  addPlaylistSong: (ps) => dispatch(addPlaylistSong(ps)),
  closeModal: () => dispatch(closeModal()),
})

export default connect(msp, mdp)(PlaylistSelectItem);