import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { closeModal } from '../../actions/modal_actions';
import { addPlaylistSong } from '../../actions/playlist_song_actions';

const PlaylistSelectItem = (props) => {
  // if (this.props.playlists.length == 0){
  //   return (
  //     <div className="loading-icon"><i className="fas fa-spinner fa-spin"></i></div>
  //   )
  // }
  return (
    <li className="index-item">
      <div className="content-item">
        <Link className="content-item-play" to={`/playlists/${props.playlist.id}`}>
          <div className="playlist-select-container-item" onClick={() => {props.closeModal();
            props.addPlaylistSong({playlist_id: props.playlist.id, song_id: props.songId})}}>
              <img src="https://img.icons8.com/clouds/2x/music.png" alt=""/>
          </div>
        </Link>
      </div>
      <div className="content-primary-text">{props.playlist.title}</div>
      <div className="content-secondary-text">{props.playlist.song_ids.length} Song(s)</div>
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