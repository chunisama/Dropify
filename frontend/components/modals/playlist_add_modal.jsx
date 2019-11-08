import React from 'react';
//Need to add component for rendering user's playlists in the modal wrapper
import PlaylistSelectContainer from '../../components/playlists/playlist_select_container';

const PlaylistAddModal = (props) => {
  return (
    <div className="playlist-add-song-modal">
      {/* Add X icon <h1 onClick={props.closeModal}>
      </h1> */}
      <h1 className="playist-add-song-modal-header">Add To Playlist</h1>
      <PlaylistSelectContainer />
    </div>
  )
}

export default PlaylistAddModal;