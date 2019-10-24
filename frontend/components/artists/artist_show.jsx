import React from 'react';
import { connect } from 'react-redux';
import { fetchArtist, fetchArtists } from "../../actions/artist_actions";
import { receiveCurrentSong, isPlaying } from "../../actions/song_actions";
import { Link } from "react-router-dom";

class ArtistShow extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      isPlaying: false,
    }
    this.toggleIcon = this.toggleIcon.bind(this);
    this.togglePlay = this.togglePlay.bind(this);

    //Playing song using album art
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount(){
    this.props.fetchArtist(this.props.match.params.artistId);
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
    if (this.state.isPlaying == false) {
      this.props.currentlyPlaying(true);
      this.props.receiveCurrentSong(songId); 
    } else if (this.state.isPlaying == true) {
      this.props.currentlyPlaying(false);
      this.props.receiveCurrentSong(songId); 
    }
  }

  //Method for playing song using album art
  handleClick(album){
    return (e) => {
      if (!e.target.classList.contains("fas", "fa-play-circle")){
        this.props.history.push(`/album/${album.id}`)
      }
    }
  }

  renderSongs(){
    let artistSongs = [];
    for (let i = 0; i < this.props.artist.songIds.length; i++) {
      for (let j = 0; j < this.props.songs.length; j++) {
        const artistSong = this.props.artist.songIds[i];
        const filteredSong = this.props.songs[j].id;
        if (artistSong == filteredSong) {
          artistSongs.push(this.props.songs[j]);
        }
      }
    }
    const result = artistSongs.map((song) => {
    return (
        <li key={song.id}>
          <div className="song-index-item">
          <i onClick={() => {this.setState({isPlaying: !this.state.isPlaying }, this.togglePlay(song.id))}} className={"song-index-item-button " + this.toggleIcon(song.id)}></i>
          <div className="song-index-item-info">
            <div className="song-index-item-title">{song.title}</div>
            <div className="song-index-item-info-child">
              <div className="song-index-item-artist">
                  {this.props.artist.name}
              </div>
              <span className="spacing">•</span>
              <div className="song-index-item-album">
                <Link to={`/albums/${song.album_id}`}>
                  {this.props.albums[song.album_id].name}
                </Link>
              </div>
            </div>
          </div>
          </div>
        </li>
    )})
    return result;
  }

  renderAlbums(){
    let artistAlbums = [];
    let albums = Object.values(this.props.albums);
    for (let i = 0; i < this.props.artist.albumIds.length; i++) {
      for (let j = 0; j < albums.length; j++) {
        const artistAlbum = this.props.artist.albumIds[i];
        const filteredAlbum = albums[j].id;
        if (artistAlbum == filteredAlbum) {
          artistAlbums.push(albums[j]);
        }
      }
    }
    const result = artistAlbums.map((album, idx) => {
    return (
        <li key={idx} className="artist-show-index-item">
          <div className="artist-show-index-item-wrapper">
            <Link to={`/albums/${album.id}`}>
          <div className="img-wrapper"><img className="img-content"src={album.photoUrl}/></div>
            </Link>
          <div className="artist-album-title">{album.name}</div>
          <div className="artist-album-artist">{this.props.artist.name}</div>
          </div>
        </li>

        // for playing the first song on album 
        // <div className="album-cover" onClick={this.handleClick(album)}>
        // <a onClick={() => this.props.receiveCurrentSong(this.props.artist.songIds[0])}><i className="fas fa-play-circle"></i></a>
        // </div> 
        //  <div className="artist-album-artist">{this.props.artist.name}</div>
        // <div className="artist-album-title">{album.name}</div>
    )})
    return result;
  }

  render(){
    if (!this.props.artist){
      return (
        <div className="loading-icon"><i className="fas fa-spinner fa-spin"></i></div>
      )
    }
    return(
      <div className="main-content-container">
        <div className="artist-show-container">
          <div className="artist-background">
            <img className="artist-photo" src={`${this.props.artist.photoUrl}`}/>
          </div>
          <div className="artist-header">
          <h1 className="artist-show-name">{this.props.artist.name}</h1>
          </div>
          <div className="artist-content">
            <div className="artist-show-subheader">Overview</div>
            <div className="artist-overview">
              <div className="artist-show-albums">
                <div className="artist-section-album-header">Albums</div>
                <div className="artist-album-index">
                  <ul className="flex-parent">
                  {this.renderAlbums()}
                  </ul>
                </div>
              </div>
              <div className="artist-show-songs">
                <div className="artist-section-song-header">Songs</div>
                <div className="artist-song-index">
                  <ul className="flex-songs">
                  {this.renderSongs()}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const msp = (state, ownProps) => {
  const { songs, albums, artists, ui } = state.entities;
  return({
    artist: artists[ownProps.match.params.artistId],
    albums: albums,
    songs: Object.values(songs),
    currentSong: ui.currentSong,
    })  
  };
const mdp = dispatch => {
  return({
    fetchArtists: () => dispatch(fetchArtists()),
    fetchArtist: (id) => dispatch(fetchArtist(id)),
    receiveCurrentSong: (songId) => dispatch(receiveCurrentSong(songId)),
    currentlyPlaying: (boolean) => dispatch(isPlaying(boolean)),
  })
}

export default connect(msp, mdp)(ArtistShow)