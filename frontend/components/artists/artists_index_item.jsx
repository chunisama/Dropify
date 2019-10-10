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
        <>
        <div className="content-wrapper">
            <Link className="artist-link"to={`/artists/${this.props.artist.id}`}>
              <img className="content-photo" src={this.props.artist.photoUrl}/>
              {/* <div onClick={() => this.playSong()}><i className="fas fa-play-circle"></i></div> */}
            </Link>
          <div className="artist-details">
              <Link className="artist-name"to={`/artists/${this.props.artist.id}`}>{this.props.artist.name}</Link>
          </div>
        </div>  
        </>
    )
  }
}
export default ArtistIndexItem;


{/* <div className="artist-prof" onClick={this.props.handleClick(this.props.artist)}> */}
{/* <div className="svg-container"> */}
{/* <svg viewBox="0 0 300 300" className="viewBox">
<circle cx="150" cy="150" r="100" strokeWidth="3"></circle>
<path d="M 110 95 L 110 205 Q 110 210 116 209 L 208 153 Q 210 150 208 147 L 116 92 Q 110 90 110 95 Z" stroke-wdith="0"></path>
</svg> */}
{/* </div> */}
{/* </div> */}