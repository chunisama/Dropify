import React from 'react';
import { connect } from 'react-redux';
import { fetchArtist, fetchArtists } from "../../actions/artist_actions";
import { receiveCurrentSong } from "../../actions/song_actions";

class ArtistShow extends React.Component{
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount(){
    this.props.fetchArtist(this.props.match.params.artistId);
  }

  // componentDidUpdate(prevProps){
  //   if (prevProps.artist !== this.props.artist){
  //     this.props.fetchArtist(this.props.match.params.artistId);
  //   }
  // }

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
    return (<div className="artist-songs-container" key={song.id}>
      <a onClick={() => this.props.receiveCurrentSong(song.id)}><i className="fas fa-play-circle"></i></a>
      <div className="artist-song-title">{song.title}</div>
      <div className="artist-song-artist">{this.props.artist.name}</div>
      <div className="artist-album-artist">{this.props.albums[song.album_id].name}</div>
    </div>)
    })
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
    const result = artistAlbums.map((album) => {
    return (
      <div className="artist-albums-container" key={album.id}>
        <div className="album-cover" onClick={this.handleClick(album)}>
          <a onClick={() => this.props.receiveCurrentSong(this.props.artist.songIds[0])}><i className="fas fa-play-circle"></i></a>
          <img src={album.photoUrl}/>
        </div> 
         <div className="artist-album-artist">{this.props.artist.name}</div>
        <div className="artist-album-title">{album.name}</div>
      </div>)
    })
    return result;
  }

  render(){
    if (!this.props.artist){
      return (
        <div className="loading-icon"><i className="fas fa-spinner fa-spin"></i></div>
      )
    }
    return(
      <div>
        <div className="artist-show-container"></div>
          <div className="artist-show-profile">
            <div className="artist-show-name">
              {this.props.artist.name}
            </div>
            <div className="artist-show-pic">
              <img src={this.props.artist.photoUrl} />
            </div>
          </div>
          <div className="artist-show-content">
            <div className="artist-content-overview">Overview</div>
            <div className="artist-show-albums">
              <div className="artist-show-album-label">Albums</div>
              {this.renderAlbums()}
            </div>
            <div className="artist-show-songs">
              <div className="artist-show-song-label">Songs</div>
              {this.renderSongs()}
            </div>
          </div>
      </div>
    )
  }
}

const msp = (state, ownProps) => {
  const { songs, albums, artists } = state.entities;
  return({
    artist: artists[ownProps.match.params.artistId],
    albums: albums,
    songs: Object.values(songs),
    })  
  };
const mdp = dispatch => {
  return({
    fetchArtists: () => dispatch(fetchArtists()),
    fetchArtist: (id) => dispatch(fetchArtist(id)),
    receiveCurrentSong: (songId) => dispatch(receiveCurrentSong(songId)),
  })
}

export default connect(msp, mdp)(ArtistShow)