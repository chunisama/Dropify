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
    return(
      <div>
        <div className="album-cover" onClick={this.props.handleClick(this.props.album)}>
            <a onClick={() => this.playSong()}><i className="fas fa-play-circle"></i></a>
            <img src={this.props.album.photoUrl}/>
        </div>
          <div className="album-details">
            <Link className="album-name"to={`/albums/${this.props.album.id}`}>{this.props.album.name}</Link>
            <Link classame="album-artist" to={`/artists/${this.props.album.artist.id}`}>{this.props.album.artist.name}</Link>
          </div>
      </div>
    )
  }
}
export default AlbumIndexItem;