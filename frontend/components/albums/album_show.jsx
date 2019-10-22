import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchAlbum } from "../../actions/album_actions";
import { receiveCurrentSong, isPlaying } from "../../actions/song_actions";

class AlbumShow extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      isPlaying: false,
    }
    this.toggleIcon = this.toggleIcon.bind(this);
    this.togglePlay = this.togglePlay.bind(this);
  }

  componentDidMount(){
    this.props.fetchAlbum(this.props.match.params.albumId);
  }

  componentDidUpdate(prevProps){
    if (prevProps.isPlaying !== this.props.isPlaying){
      this.setState({
        isPlaying: this.props.isPlaying,
      });
    }
  }

  toggleIcon(songId){
    if (this.state.isPlaying === true && songId === this.props.currentSong) {
      return "fas fa-pause";
    } else {
      return "fab fa-google-play";
    }
  }

  togglePlay(songId){
    // if (this.state.isPlaying == false) {
    //   this.props.currentlyPlaying(true);
    // }
    if (this.state.isPlaying == false) {
      this.props.currentlyPlaying(true);
      this.props.receiveCurrentSong(songId); 
    } else if (this.state.isPlaying == true) {
      this.props.currentlyPlaying(false);
      this.props.receiveCurrentSong(songId); 
    }
  }

  renderSongs(){
    let albumSongs = [];
      for (let i = 0; i < this.props.album.songIds.length; i++) {
        for (let j = 0; j < this.props.songs.length; j++) {
          const albumSong = this.props.album.songIds[i];
          const filteredSong = this.props.songs[j].id;
          if (albumSong == filteredSong) {
            albumSongs.push(this.props.songs[j]);
          }
        }
      }
    const result = albumSongs.map((song, idx) => {
      //add play button here
      return (<li key={idx}>
        <div className="song-index-item">
        <i onClick={() => {this.setState({isPlaying: !this.state.isPlaying }, this.togglePlay(song.id))}} className={"song-index-item-button " + this.toggleIcon(song.id)}></i>
        <div className="song-index-item-info">
        <div className="song-index-item-title">{song.title}</div>
        <div className="song-index-item-info-child">
        <div className="song-index-item-artist">
        <Link to={`/artists/${this.props.album.artistId}`}>
          {this.props.album.artist}
        </Link>
        </div>
        <span className="spacing">•</span>
        <div className="song-index-item-album">
            {this.props.album.name}
        </div>
      </div>
    </div>
  </div>
      </li>)
    })
    return result;
  }

  render(){
    if (!this.props.album){
      return (
        <div className="loading-icon"><i className="fas fa-spinner fa-spin"></i></div>
      )
    }

    return (
      <div className="album-show-container">
        <div className="album-show">
            <div className="album-show-img-container">
              <img className="album-show-img-content"src={this.props.album.photoUrl}/>
              <div className="album-show-info">
                <div className="album-show-text1">{this.props.album.name}</div>
                <div className="album-show-text2">
                  <Link to={`/artists/${this.props.album.artistId}`}>
                    {this.props.album.artist}
                  </Link>
                </div>
                <div className="album-show-text3">{this.props.album.songIds.length} SONGS</div>
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
  const { songs, albums, ui } = state.entities;
  return ({
    album: albums[ownProps.match.params.albumId],
    songs: Object.values(songs),
    isPlaying: ui.isPlaying,
    currentSong: ui.currentSong,
  })
}

const mdp = dispatch => ({
  fetchAlbum: id => dispatch(fetchAlbum(id)),
  receiveCurrentSong: (songId) => dispatch(receiveCurrentSong(songId)),
  currentlyPlaying: (boolean) => dispatch(isPlaying(boolean)),
})

export default connect(msp, mdp)(AlbumShow);