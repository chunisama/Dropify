import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchPlaylist } from "../../actions/playlist_actions";
import { receiveCurrentSong } from "../../actions/song_actions";
import { fetchAlbums } from "../../actions/album_actions";
import { openModal, setModalComponent, setModalProps } from '../../actions/modal_actions';
import { openDropdown, setDropdownProps } from "../../actions/dropdown_actions";

class PlaylistShow extends React.Component {
  constructor(props){
    super(props);
    this.handlePlay = this.handlePlay.bind(this);
  }

  componentDidMount(){
    this.props.fetchPlaylist(this.props.match.params.playlistId);
    this.props.fetchAlbums();
  }

  //Use this as guideline for handling queue
  handlePlay() {
    if (this.props.playlist.song_ids) {
      this.props.receiveCurrentSong(this.props.playlist.song_ids[0]);
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
        <i onClick={() => this.props.receiveCurrentSong(song.id)} className="song-index-item-button fab fa-google-play"></i>
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
        <div className="song-menu"
         onClick={(e) => {
           e.stopPropagation();
           this.props.openDropdown({x: e.clientX - 100, y: e.clientY + 3});
           this.props.setDropdownProps({songId: song.id, playlistId: this.props.playlist.id});
         }}>
          • • •
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
              <img className="album-show-img-content"src=""/>
              <div className="album-show-info">
                <div className="album-show-text1">{this.props.playlist.title}</div>
                <div className="album-show-text2">
                    {this.props.playlist.user.username}
                </div>
                <div className="album-show-text3">{this.props.playlist.song_ids.length} SONGS</div>

                <div className="show-button-container">
                  <button className="show-play-button" onClick={this.handlePlay}>
                    Play
                  </button>
                  {deleteButton}
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
  const { songs, playlists } = state.entities;
  return({
    playlist: playlists[ownProps.match.params.playlistId],
    songs: Object.values(songs),
    currentUserId: state.session.id,
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
})

export default connect(msp, mdp)(PlaylistShow);