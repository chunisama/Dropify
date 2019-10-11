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
      return (<li key={idx}>
        <div className="song-index-item">
        <i onClick={() => this.props.receiveCurrentSong(this.props.song.id)} className="song-index-item-button fab fa-google-play"></i>
        <div className="song-index-item-info">
        <div className="song-index-item-title">{song.title}</div>
        <div className="song-index-item-info-child">
        <div className="song-index-item-artist">
        <Link to={`/artists/${this.props.album.artistId}`}>
          {this.props.album.artist}
        </Link>
        </div>
        <span class="spacing">•</span>
        <div className="song-index-item-album">
          <Link to={`/albums/${this.props.album.id}`}>
            {this.props.album.name}
          </Link>
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
                  <Link to={`/artists/${this.props.album.artist.id}`}>
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