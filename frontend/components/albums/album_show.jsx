import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchAlbum } from "../../actions/album_actions";
import { receiveCurrentSong } from "../../actions/song_actions";
import SongIndex from "../songs/song_index_container";

class AlbumShow extends React.Component {
  constructor(props){
    super(props);
    this.handlePlay = this.handlePlay.bind(this);
  }

  componentDidMount(){
    this.props.fetchAlbum(this.props.match.params.albumId)
  }

  componentDidUpdate(prevProps){
    if (prevProps.album !== this.props.album){
      this.props.fetchAlbum(this.props.match.params.albumId);
    }
  }
  render(){
    if (!this.props.album){
      return (
        <div className="loading-icon"><i className="fas fa-spinner fa-spin"></i></div>
      )
    }
    return (
      <div className="Album-show-container">
        <div className="Album-songs">
            {/* <SongIndex songIds={this.props.album.songIds}/> */}
        </div>
        <div className="sho">

        </div>
      </div>
    )
  }

}


const msp = (state, ownProps) => ({
  album: state.entities.albums[ownProps.match.params.albumId],
  
})

const mdp = dispatch => ({
  fetchAlbum: id => dispatch(fetchAlbum(id)),
  receiveCurrentSong: (songId) => dispatch(receiveCurrentSong(songId)),
})

export default connect(msp, mdp)(AlbumShow);