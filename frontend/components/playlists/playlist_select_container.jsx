import React from 'react';
import { connect } from 'react-redux';
import { fetchPlaylists } from '../../actions/playlist_actions';
import { setModalComponent } from '../../actions/modal_actions';
import PlaylistSelectItem from './playlist_select_item';

class PlaylistSelect extends React.Component {
  componentDidMount(){
    this.props.fetchPlaylists();
  }
  
  render(){
    const userPlaylists = this.props.playlists.filter(playlist => playlist.user.id === this.props.curentUserId);
    const playlists = userPlaylists.map(playlist => (
      <PlaylistSelectItem key={playlist.id} playlist={playlist} />
    ));
    return (
      <div className="playlist-select">
        <ul className="flex-parent">
          {playlists}
        </ul>
        <div className="create-modal-button">
          <button onClick={() => {this.props.setModalComponent('create')}}>
            New Playlist
          </button>
        </div>
      </div>
    )
  }

}


const msp = state => ({
  playlists: Object.values(state.entities.playlists),
  currentUserId: state.session.currentUserId,
})

const mdp = dispatch => ({
  fetchPlaylists: () => dispatch(fetchPlaylists()),
  setModalComponent: (type) => dispatch(setModalComponent(type)),
})

export default connect(msp, mdp)(PlaylistSelect);