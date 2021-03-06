import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchAlbum } from "../../actions/album_actions";
import { receiveCurrentSong, isPlaying, setSongQueue } from "../../actions/song_actions";
import { openDropdown, setDropdownProps } from "../../actions/dropdown_actions";
import { createLike, deleteLike } from "../../actions/like_actions";

class AlbumShow extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      isPlaying: false,
    }
    this.toggleIcon = this.toggleIcon.bind(this);
    this.togglePlay = this.togglePlay.bind(this);
    this.handleLike = this.handleLike.bind(this);
    this.handlePlay = this.handlePlay.bind(this);
  }

  componentDidMount(){
    this.props.fetchAlbum(this.props.match.params.albumId)
    .then(() => {this.props.setSongQueue(this.props.songIds)
    });
  }

  componentDidUpdate(prevProps){
    // if (Object.values(prevProps.songs).length !== Object.values(this.props.songs).length) {
    //   this.props.fetchAlbum(this.props.match.params.albumId)
    //   .then(() => {this.props.setSongQueue(this.props.songIds);
    //   });
    // }
    if (prevProps.isPlaying !== this.props.isPlaying){
      this.setState({
        isPlaying: this.props.isPlaying,
      });
    }
  }

  handlePlay() {
    if (this.props.album.songIds) {
      this.togglePlay(this.props.album.songIds[0]);      
    }
  }

  handleLike(e) {
    const liked = this.props.currentUser.liked_album_ids.includes(this.props.album.id);
    const like = {
      user_id: this.props.currentUser.id,
      likeable_id: this.props.album.id,
      likeable_type: 'Album'
    };

    liked ? this.props.deleteLike(like) : this.props.createLike(like);
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
        <div className="song-index-item-wrapper">
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
    <div className="song-details">
    <div className="song-menu"
    onClick={(e) => {
      e.stopPropagation();
      this.props.openDropdown({x: e.clientX - 100, y: e.clientY + 3});
      this.props.setDropdownProps({songId: song.id, playlistId: this.props.playlistId});
    }}>
    • • •
    </div>
    <div className="song-duration">{song.duration}</div>
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
                <div className="show-button-container">
                  <button className="show-play-button" onClick={this.handlePlay}>
                    Play
                  </button>
                  <button className="delete-playlist-button"
                    onClick={this.handleLike}>
                    {this.props.currentUser.liked_album_ids.includes(this.props.album.id) ? 'Remove from Collection' : 'Save to Collection'}
                  </button>
                </div>
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
  const { songs, albums, audio } = state.entities;
  return ({
    album: albums[ownProps.match.params.albumId],
    songs: Object.values(songs),
    songIds: Object.keys(songs).map((songId) => {
      return parseInt(songId);
    }),
    isPlaying: audio.isPlaying,
    currentSong: audio.currentSong,
    currentUser: state.entities.users[state.session.id]
  })
}

const mdp = dispatch => ({
  fetchAlbum: id => dispatch(fetchAlbum(id)),
  receiveCurrentSong: (songId) => dispatch(receiveCurrentSong(songId)),
  currentlyPlaying: (boolean) => dispatch(isPlaying(boolean)),
  openDropdown: pos => dispatch(openDropdown(pos)),
  setDropdownProps: props => dispatch(setDropdownProps(props)),
  createLike: like => dispatch(createLike(like)),
  deleteLike: like => dispatch(deleteLike(like)),
  setSongQueue: (queue) => dispatch(setSongQueue(queue)),
})

export default connect(msp, mdp)(AlbumShow);