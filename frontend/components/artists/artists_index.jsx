import React from "react";
import ArtistIndexItem from "./artists_index_item";
import { withRouter } from 'react-router-dom';

class ArtistIndex extends React.Component {
  constructor(props){
    super(props);
    this.state = {
    }
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount(){
    // this.props.fetchSongs();
    // this.props.fetchAlbums();
    // this.props.fetchArtists();
  }

  handleClick(artist){
    return (e) => {
      if (!e.target.classList.contains("fas", "fa-play-circle")){
        this.props.history.push(`/artist/${artist.id}`)
      }
    }
  }

  render(){
    if (this.props.artists.length == 0){
      return (
        <div className="loading-icon"><i className="fas fa-spinner fa-spin"></i></div>
      )
    }
    return(
      <div className="artist-index-container">
        <ul className="flex-master">
          {this.props.artists.map((artist, idx) => (
            <li key={idx} className="index-item">
            <ArtistIndexItem
              artist={artist}
              key={artist.id}
              receiveCurrentSong={this.props.receiveCurrentSong}
              handleClick={this.handleClick}
            />
            </li>
          ))}
        </ul>
      </div>
    )
  }

}

export default withRouter(ArtistIndex);