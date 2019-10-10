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
        {/* <button className="song-index-item-button" ></button> */}
          <i onClick={() => this.props.receiveCurrentSong(this.props.song.id)} className="song-index-item-button fas fa-play-circle"></i>
         <div className="song-index-item-info">
          <div className="song-index-item-title">{this.props.song.title}</div>
          <div className="song-index-item-info-child">
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
         </div>
        </div>
      </li>
    )
  }
}

export default SongIndexItem;