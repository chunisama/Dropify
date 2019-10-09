import React from 'react';
import { Link } from 'react-router-dom';

class ArtistIndexItem extends React.Component {
  constructor(props){
    super(props);
  }

  playSong(){
    let songId = this.props.artist.songIds[0];
    this.props.receiveCurrentSong(songId);
  }


  render(){
    return(
      <div>
        <div>
          <div className="artist-prof" onClick={this.props.handleClick(this.props.artist)}>
            <a onClick={() => this.playSong()}><i className="fas fa-play-circle"></i></a>
            <img src={this.props.artist.photoUrl}/>
          </div>
          <div className="artist-details">
              <Link className="artist-name"to={`/artists/${this.props.artist.id}`}>{this.props.artist.name}</Link>
            </div>
        </div>
      </div>
    )
  }
}
export default ArtistIndexItem;