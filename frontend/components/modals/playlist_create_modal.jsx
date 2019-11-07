import React from 'react';
import { Link } from 'react-router-dom';

class PlaylistCreateModal extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      playlistName: '',
    }
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
    this.createPlaylist = this.createPlaylist.bind(this);
    this.close = this.close.bind(this);
  };

  updatePlaylistName(e){
    this.setState({playlistName: e.target.value});
  }

  createPlaylist(){
    if (this.state.playlistName) {
      this.props.createPlaylist({title: this.state.playlistName, user_id: this.props.currentUserId});
      this.close();
    }
  }

  close(){
    this.setState({playlistName: ''}, this.props.closeModal);
  }

  render(){
    return (
    <div className="playlist-create-modal">
      <h1 onClick={() => this.close()}>
      </h1>
      <h1 className="modal-header">Create New Playlist</h1>
      <div className="modal-input-container">
        <input type="text" value={this.state.playlistName} className="modal-input"
        placeholder="Start typing..." onChange={this.updatePlaylistName}
        />
      </div>
      <div className="modal-button-container">
        <button className="cancel-button" onClick={this.close}>
          Cancel
        </button>
      </div>
      <Link to="/browse/playlists">
        <button className="create-button" onClick={this.createPlaylist}>
          Create
        </button>
      </Link>
    </div>
    );
  }
}

export default PlaylistCreateModal