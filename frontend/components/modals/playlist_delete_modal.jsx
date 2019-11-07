import React from 'react';
import { Link } from 'react-router-dom';

class PlaylistDeleteModal extends React.Component {
  constructor(props) {
    super(props);
    this.deletePlaylist = this.confirmDelete.bind(this);
  }

  deletePlaylist(){
    const playlistId = this.props.modalProps.playlistId;
    this.props.deletePlaylist(playlistId);
    this.props.closeModal();
  }

  render() {
    return(
      <div className="playlist-delete-modal">
      <h1 onClick={this.close}>
      </h1>
      <h1 className="modal-header">Do you really want to delete this playlist?</h1>
      <div className="modal-button-container">
        <button className="cancel-button" onClick={this.close}>
          Cancel
        </button>
      </div>
      <Link to="/browse/playlists">
        <button className="create-button" onClick={this.deletePlaylist}>
          Delete
        </button>
      </Link>
    </div>
    );
  }
}

export default PlaylistDeleteModal;