import { Link } from "react-router-dom";
import React from 'react';

class SongIndexItem extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      isPlaying: false,
    }
    this.toggleIcon = this.toggleIcon.bind(this);
  }

  // componentDidMount(){
  //   this.setState({isPlaying: this.props.isPlaying});
  //   this.toggleIcon();
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




  render(){
    return(
      <li>
        <div className="song-index-item">
          <i onClick={() => {this.props.receiveCurrentSong(this.props.song.id)}} className={"song-index-item-button " + this.toggleIcon()}></i>
         <div className="song-index-item-info">
          <div className="song-index-item-title">{this.props.song.title}</div>
          <div className="song-index-item-info-child">
            <div className="song-index-item-artist">
              <Link to={`/artists/${this.props.album.artistId}`}>
                {this.props.album.artist}
              </Link>
            </div>
            <span className="spacing">•</span>
            <div className="song-index-item-album">
              <Link to={`/albums/${this.props.album.id}`}>
                {this.props.album.name}
              </Link>
            </div>
          </div>
         </div>
        </div>
      </li>
    )
  }
}

export default SongIndexItem;