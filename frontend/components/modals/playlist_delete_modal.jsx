import React from 'react';
import { Link } from 'react-router-dom';

class PlaylistDeleteModal extends React.Component {
  constructor(props) {
    super(props);
    this.deletePlaylist = this.deletePlaylist.bind(this);
  }

  deletePlaylist(){
    const playlistId = this.props.modalProps.playlistId;
    this.props.deletePlaylist(playlistId).then(() => {
      this.props.history.push("/browse/playlists")
    });
    this.props.closeModal();
  }

  render() {
    return(
      <div className="playlist-delete-modal">
      <h1 className= "close-modal-x" onClick={this.props.closeModal}>
        <i className="fas fa-times"></i>
      </h1>
      <h1 className="modal-header">Do you really want to delete this playlist?</h1>
      <div className="modal-button-container">
        <button className="cancel-button" onClick={this.props.closeModal}>
          Cancel
        </button>
        <button className="create-button" onClick={this.deletePlaylist}>
          Delete
        </button>
      </div>
    </div>
    );
  }
}

export default PlaylistDeleteModal;