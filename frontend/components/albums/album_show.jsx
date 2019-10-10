import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchAlbum } from "../../actions/album_actions";
import { receiveCurrentSong } from "../../actions/song_actions";

class AlbumShow extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.fetchAlbum(this.props.match.params.albumId);
  }

  // componentDidUpdate(prevProps){
  //   if (prevProps.album !== this.props.album){
  //     this.props.fetchAlbum(this.props.match.params.albumId);
  //   }
  // }

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
      return (<div classkey={idx}>
        <a onClick={() => this.props.receiveCurrentSong(song.id)}><i className="fas fa-play-circle"></i></a>
        <div className="album-song-title">{song.title}</div>
        <div className="album-song-artist">{this.props.album.artist}</div>
        <div className="album-song-album">{this.props.album.name}</div>
      </div>)
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
        <div className="album-songs">
            {this.renderSongs()}
        </div>
        <div className="album-show-info">
          <div className="album-show-cover-container">
            <img src={this.props.album.photoUrl}/>
          </div>
          <div className="album-show-text1">{this.props.album.name}</div>
          <div className="album-show-text2">
            <Link to={`/artists/${this.props.album.artist.id}`}>
              {this.props.album.artist}
            </Link>
          </div>
          <div className="album-show-text3">{this.props.album.songIds.length} SONGS</div>
        </div>
      </div>
  )}

}


const msp = (state, ownProps) => {
  const { songs, albums } = state.entities;
  return ({
    album: albums[ownProps.match.params.albumId],
    songs: Object.values(songs),
  })
}

const mdp = dispatch => ({
  fetchAlbum: id => dispatch(fetchAlbum(id)),
  receiveCurrentSong: (songId) => dispatch(receiveCurrentSong(songId)),
})

export default connect(msp, mdp)(AlbumShow);