import { Link } from "react-router-dom";
import React from 'react';

class SongIndexItem extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <li>
        <div className="song-index-item">
          <a onClick={() => this.props.receiveCurrentSong(this.props.song.id)}><i className="fas fa-play-circle"></i></a>
          <div className="song-index-item-title">{this.props.song.title}</div>
          <div className="song-index-item-artist">
            <Link to={`/artists/${this.props.album.artistId}`}>
              {this.props.album.artist}
            </Link>
          </div>
          <div className="song-index-item-album">
            <Link to={`/albums/${this.props.album.id}`}>
            {this.props.album.name}
            </Link>
          </div>
        </div>
      </li>
    )
  }
}

export default SongIndexItem;