import React from 'react';
import { Link } from 'react-router-dom';

class AlbumIndexItem extends React.Component {
  constructor(props){
    super(props);
  }

  playSong(){
    let songId = this.props.album.songIds[0];
    this.props.receiveCurrentSong(songId);
  }
  render(){
    debugger
    return(
      <div className="content-wrapper">
        <div className="album-cover">
        <Link className="album-link"to={`/albums/${this.props.album.id}`}>
            {/* <i className="fas fa-play-circle" onClick={() => this.playSong()}></i> */}
            <img className="content-photo-square" src={this.props.album.photoUrl}/>
        </Link>
        </div>
          <div className="album-details">
            <Link className="album-name"to={`/albums/${this.props.album.id}`}>{this.props.album.name}</Link>
            <Link className="album-artist" to={`/artists/${this.props.album.artistId}`}>{this.props.album.artist}</Link>
          </div>
      </div>
    )
  }
}
export default AlbumIndexItem;
// onClick={this.props.handleClick(this.props.album)}
