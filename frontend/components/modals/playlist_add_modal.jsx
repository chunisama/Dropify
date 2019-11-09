import React from 'react';
import PlaylistSelectContainer from '../../components/playlists/playlist_select_container';

const PlaylistAddModal = (props) => {
  return (
    <div className="playlist-add-song-modal">
      <h1 className= "close-modal-x" onClick={props.closeModal}>
      <i className="fas fa-times"></i>
      </h1>
      <h1 className="playist-add-song-modal-header">Add To Playlist</h1>
      <PlaylistSelectContainer />
    </div>
  )
}

export default PlaylistAddModal;