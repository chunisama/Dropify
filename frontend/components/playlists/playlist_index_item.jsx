import React from 'react';
import { Link } from 'react-router-dom';
import  { connect }  from 'react-redux';
import { fetchSong } from '../../actions/song_actions';

class PlaylistIndexItem extends React.Component {
  constructor(props){
    super(props);
  }
  
  render(){
    return (
    <li className="index-item">
      <div className="playlist-index-item">
        <div className="playlist-cover">
          <Link className="playlist-link" to={`/playlists/${this.props.playlist.id}`}>
            <img className="content-photo-square" src="https://s18670.pcdn.co/wp-content/uploads/Awesome-Songs-for-Your-End-of-Year-Playlist.jpg" />
          </Link>
        </div>
        <div className="playlist-details">
          <div className="playlist-title">
            {this.props.playlist.title}
          </div>
          <div className="playlist-user">
            {this.props.playlist.user.username}
          </div>
        </div>
      </div>
    </li>
    )
  }
}


const mdp = dispatch => ({
  fetchSong: id => dispatch(fetchSong(id)),
});



export default connect(null, mdp)(PlaylistIndexItem);