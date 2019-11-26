import { Link } from "react-router-dom";
import React from 'react';

class SongIndexItem extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      isPlaying: false,
      duration: "",
    }
    this.toggleIcon = this.toggleIcon.bind(this);
    this.togglePlay = this.togglePlay.bind(this);
  }

  // For future Queue component
  // componentDidMount(){
    // if (this.props.queueIds) {
    //   this.props.setSongQueue(this.props.queueIds);
    // }
  // }

  componentDidUpdate(prevProps){
    if (prevProps.isPlaying !== this.props.isPlaying){
      this.setState({
        isPlaying: this.props.isPlaying,
      });
    }
  }

  toggleIcon(){
    if (this.state.isPlaying === true && this.props.song.id === this.props.currentSong) {
      return "fas fa-pause";
    } else {
      return "fab fa-google-play";
    }
  }

  togglePlay(){
    if (this.state.isPlaying == false) {
      this.props.receiveCurrentSong(this.props.song.id);
      this.props.currentlyPlaying(true);

    } else if (this.state.isPlaying == true) {
      this.props.currentlyPlaying(false);
      this.props.receiveCurrentSong(this.props.song.id);
    }
  }

  render(){
    return(
      <li>
        <div className="song-index-item" onDoubleClick={() => {this.setState({isPlaying: !this.state.isPlaying }, this.togglePlay())}}>
          <div className="song-index-item-wrapper">
          <i onClick={() => {this.setState({isPlaying: !this.state.isPlaying }, this.togglePlay())}} className={"song-index-item-button " + this.toggleIcon()}></i>
         <div className="song-index-item-info">
          <div className="song-index-item-title">{this.props.song.title}</div>
          <div className="song-index-item-info-child">
            <div className="song-index-item-artist">
              <Link to={`/artists/${this.props.song.artist_id}`}>
                {this.props.song.artist}
              </Link>
            </div>
            <span className="spacing">•</span>
            <div className="song-index-item-album">
              <Link to={`/albums/${this.props.song.album_id}`}>
                {this.props.song.album}
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
           this.props.setDropdownProps({songId: this.props.song.id, playlistId: this.props.playlistId});
         }}>
          • • •
         </div>
         <div className="song-duration">{this.props.song.duration}</div>
        </div>
        </div>
      </li>
    )
  }
}

export default SongIndexItem;