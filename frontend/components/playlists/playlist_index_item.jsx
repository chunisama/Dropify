import React from 'react';
import { Link } from 'react-router-dom';
import  { connect }  from 'react-redux';
import { fetchSong } from '../../actions/song_actions';

class PlaylistIndexItem extends React.Component {
  constructor(props){
    super(props);
  }


  render(){
    if (this.props.playlists.length == 0){
      return (
        <div className="loading-icon"><i className="fas fa-spinner fa-spin"></i></div>
      )
    }
    <li>
      <div className="playlist-index-item">
        <div className="playlist-cover">
          <img className="content-photo-square" src="" />
        </div>
        <div className="playlist-details">
          <div className="playlist-title">
            {this.props.playlist.title}
          </div>
          <div className="playlist-user">
            {this.props.playlist.user.name}
          </div>
        </div>
      </div>
    </li>
  }
}


const mdp = dispatch => ({
  fetchSong: id => dispatch(fetchSong),
});



export default connect(null, mdp)(PlaylistIndexItem);