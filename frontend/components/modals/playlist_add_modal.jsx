import React from 'react';
//Need to add component for rendering user's playlists in the modal wrapper
import PlaylistSelectContainer from '../../components/playlists/playlist_select_container';

const PlaylistAddModal = (props) => {
  return (
    <div className="playlist-add-song-modal">
      <h1 onClick={props.closeModal}>
        <div>
          <svg viewBox="0 0 200 200">
            <path d="M 50 50 L 150 150" StrokeWidth="8" />
            <path d="M 50 50 L 150 150" StrokeWidth="8" />
          </svg>
        </div>
      </h1>
      <h1 className="playist-add-song-modal-header">Add To Playlist</h1>
      <PlaylistSelectContainer />
    </div>
  )
}

export default PlaylistAddModal;