import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { closeModal } from '../../actions/modal_actions';
import { addPlaylistSong } from '../../actions/playlist_song_actions';

const PlaylistSelectItem = (props) => {
  return (
    <li className="index-item">
      <div className="content-item">
          <div className="playlist-select-container-item" onClick={() => {
            props.addPlaylistSong({playlist_id: props.playlist.id, song_id: props.songId})
            .then(() => {
              props.closeModal(); 
              props.history.push(`/playlists/${props.playlist.id}`)});
            }}>
              <img src="https://img.icons8.com/clouds/2x/music.png" alt=""/>
          </div>
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

export default withRouter(connect(msp, mdp)(PlaylistSelectItem));