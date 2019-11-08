import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchPlaylist } from "../../actions/playlist_actions";
import { receiveCurrentSong } from "../../actions/song_actions";

class PlaylistShow extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.fetchPlaylist(this.props.match.params.playlistId);
  }

  renderSongs(){
    const result = this.props.songs.map((song, idx) => {
      return this.props.playlist.song_ids.map((songId) => {
        if (songId === song.id) {
      return(
        <li key={idx}>
          <div className="song-index-item">
        <i onClick={() => this.props.receiveCurrentSong(song.id)} className="song-index-item-button fab fa-google-play"></i>
        <div className="song-index-item-info">
        <div className="song-index-item-title">{song.title}</div>
        <div className="song-index-item-info-child">
        <div className="song-index-item-artist">
        <Link to={`/artists/${song.artistId}`}>
          {song.artist.name}
        </Link>
        </div>
        <span class="spacing">•</span>
        <div className="song-index-item-album">
          {/* <Link to={`/albums/${this.props.album.id}`}> */}
            {/* {this.props.album.name} */}
          {/* </Link> */}
          </div>
       </div>
        </div>
      </div>
        </li>
      )}})
      }      
      )
      return result;
  }


  render(){
    if (!this.props.playlist){
      return (
        <div className="loading-icon"><i className="fas fa-spinner fa-spin"></i></div>
      )
    }

    return (
      <div className="album-show-container">
        <div className="album-show">
            <div className="album-show-img-container">
              <img className="album-show-img-content"src=""/>
              <div className="album-show-info">
                <div className="album-show-text1">{this.props.playlist.title}</div>
                <div className="album-show-text2">
                    {this.props.playlist.user.username}
                </div>
                <div className="album-show-text3">{this.props.playlist.song_ids.length} SONGS</div>
              </div>
            </div>
          <div className="album-show-songs-index">
            <ul>
            {this.renderSongs()}
            </ul>
          </div>
        </div>
      </div>
    )}
}

const msp = (state, ownProps) => {
  const { songs, playlists } = state.entities;
  return({
    playlist: playlists[ownProps.match.params.playlistId],
    songs: Object.values(songs),
  })
}

const mdp = (dispatch) => ({
  fetchPlaylist: id => dispatch(fetchPlaylist(id)),
  receiveCurrentSong: (songId) => dispatch(receiveCurrentSong(songId)),
})

export default connect(msp, mdp)(PlaylistShow);