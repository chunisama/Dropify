import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchPlaylist } from "../../actions/playlist_actions";
import { receiveCurrentSong, isPlaying, setSongQueue } from "../../actions/song_actions";
import { fetchAlbums } from "../../actions/album_actions";
import { openModal, setModalComponent, setModalProps } from '../../actions/modal_actions';
import { openDropdown, setDropdownProps } from "../../actions/dropdown_actions";
import { createFollow, deleteFollow } from "../../actions/follow_actions";

class PlaylistShow extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      isPlaying: false,
    }
    this.handlePlay = this.handlePlay.bind(this);
    this.toggleIcon = this.toggleIcon.bind(this);
    this.togglePlay = this.togglePlay.bind(this);
    this.handleFollow = this.handleFollow.bind(this);
  }

  componentDidMount(){
    this.props.fetchPlaylist(this.props.match.params.playlistId)    
    .then(() => {this.props.setSongQueue(this.props.songIds);
    });;
    this.props.fetchAlbums();
  }

  componentDidUpdate(prevProps){
    // if (Object.values(prevProps.songs).length !== Object.values(this.props.songs).length) {
    //   this.props.fetchPlaylist(this.props.match.params.playlistId)
    //   .then(() => {this.props.setSongQueue(this.props.songIds);
    //   });
    // }
    if (prevProps.isPlaying !== this.props.isPlaying){
      this.setState({
        isPlaying: this.props.isPlaying,
      });
    }
  }

  togglePlay(songId){
    if (this.state.isPlaying == false) {
      this.props.receiveCurrentSong(songId); 
      this.props.currentlyPlaying(true);
    } else if (this.state.isPlaying == true) {
      this.props.currentlyPlaying(false);
      this.props.receiveCurrentSong(songId); 
    }
  }

  toggleIcon(songId){
    if (this.state.isPlaying === true && songId === this.props.currentSong) {
      return "fas fa-pause";
    } else {
      return "fab fa-google-play";
    }
  }

  handleFollow(e) {
    const following = this.props.currentUser.followed_playlist_ids.includes(this.props.playlist.id);
    const follow = {
      user_id: this.props.currentUser.id,
      followable_id: this.props.playlist.id,
      followable_type: 'Playlist'
    };

    following ? this.props.deleteFollow(follow) : this.props.createFollow(follow);
  }

  //Use this as guideline for handling queue
  handlePlay() {
    if (this.props.playlist.song_ids) {
      this.togglePlay(this.props.playlist.song_ids[0]);
    }
  }

  renderSongs(){
    const result = this.props.songs.map((song, idx) => {
      return this.props.playlist.song_ids.map((songId) => {
        if (songId == song.id) {
      return(
        <li key={idx}>
        <div className="song-index-item">
        <div className="song-index-item-wrapper">
        <i onClick={() => {this.setState({isPlaying: !this.state.isPlaying }, this.togglePlay(song.id))}} className={"song-index-item-button " + this.toggleIcon(song.id)}></i>
        <div className="song-index-item-info">
        <div className="song-index-item-title">{song.title}</div>
        <div className="song-index-item-info-child">
          <div className="song-index-item-artist">
            <Link to={`/artists/${song.artist_id}`}>
              {song.artist}
            </Link>
          </div>
          <span className="spacing">•</span>
          <div className="song-index-item-album">
            <Link to={`/albums/${song.album_id}`}>
              {song.album}
            </Link>
          </div>
        </div>
        </div>
        </div>
        <div className="song-details">
        <div className="song-menu"
         onClick={(e) => {
           e.stopPropagation();
           this.props.openDropdown({x: e.clientX - 100, y: e.clientY + 3});
           this.props.setDropdownProps({songId: song.id, playlistId: this.props.playlist.id});
         }}>
          • • •
         </div>
         <div className="song-duration">{song.duration}</div>
        </div>
      </div>
        </li>
        )
      }
    })
  })
    return result;
  }


  render(){
    if (!this.props.playlist){
      return (
        <div className="loading-icon"><i className="fas fa-spinner fa-spin"></i></div>
      )
    }

    let deleteButton;
    if (this.props.currentUserId === this.props.playlist.user.id) {
      deleteButton = (
        <button className="delete-playlist-button" onClick={() => {
          this.props.openModal();
          this.props.setModalComponent('delete');
          this.props.setModalProps({ playlistId: this.props.playlist.id })
        }}>
          Delete
        </button>
      );
    } else {
      deleteButton = '';
    }

    return (
      <div className="album-show-container">
        <div className="album-show">
            <div className="album-show-img-container">
              <img className="album-show-img-content" src="https://s18670.pcdn.co/wp-content/uploads/Awesome-Songs-for-Your-End-of-Year-Playlist.jpg"/>
              <div className="album-show-info">
                <div className="album-show-text1">{this.props.playlist.title}</div>
                <div className="album-show-text2">
                    {this.props.playlist.user.username}
                </div>
                <div className="album-show-text3">{this.props.playlist.song_ids.length} SONG(S)</div>
                <div className="playlist-show-button-container">
                  <button className="show-play-button" onClick={this.handlePlay}>
                    Play
                  </button>
                  {deleteButton}
                  <button className="delete-playlist-button"
                    onClick={this.handleFollow}>
                    {this.props.currentUser.followed_playlist_ids.includes(this.props.playlist.id) ? 'Unfollow' : 'Follow'}
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
  const { songs, playlists, audio, users } = state.entities;
  return({
    playlist: playlists[ownProps.match.params.playlistId],
    songs: Object.values(songs),
    songIds: Object.keys(songs).map((songId) => {
      return parseInt(songId);
    }),
    currentUserId: state.session.id,
    currentSong: audio.currentSong,
    isPlaying: audio.isPlaying,
    currentUser: users[state.session.id],
  })
}

const mdp = (dispatch) => ({
  fetchPlaylist: id => dispatch(fetchPlaylist(id)),
  receiveCurrentSong: (songId) => dispatch(receiveCurrentSong(songId)),
  fetchAlbums: () => dispatch(fetchAlbums()),
  openModal: () => dispatch(openModal()),
  setModalComponent: (type) => dispatch(setModalComponent(type)),
  setModalProps: (props) => dispatch(setModalProps(props)),
  openDropdown: pos => dispatch(openDropdown(pos)),
  setDropdownProps: props => dispatch(setDropdownProps(props)),
  currentlyPlaying: (boolean) => dispatch(isPlaying(boolean)),
  createFollow: follow => dispatch(createFollow(follow)),
  deleteFollow: follow => dispatch(deleteFollow(follow)),
  setSongQueue: (queue) => dispatch(setSongQueue(queue)),
})

export default connect(msp, mdp)(PlaylistShow);