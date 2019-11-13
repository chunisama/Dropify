import React from "react";
import ArtistIndexItem from "./artists_index_item";
import { withRouter } from 'react-router-dom';

const arrayEqeu = (a1, a2) => {
  return ( a1.length === a2.length && a1.every((val, idx) => val === a2[idx]) );
};

class ArtistIndex extends React.Component {
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount(){
    // this.props.fetchSongs();
    // this.props.fetchAlbums();
    this.props.fetchArtists({
      artist_ids: this.props.artistIds,
      search_term: this.props.searchTerm
    });
  }

  componentDidUpdate(prevProps){
    if (
      (prevProps.artistIds && !arrayEqeu(this.props.artistIds,prevProps.artistIds)) ||
      (prevProps.searchTerm && this.props.searchTerm !== prevProps.searchTerm)
    ) {
      this.props.fetchArtists({
        artist_ids: prevProps.artistIds,
        search_term: prevProps.searchTerm
      });
    }
  }

  // playing song by clicking artist prof pic
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

    let filteredArtists;
    if (this.props.searchTerm) {
      filteredArtists = this.props.artists.filter(artist => artist.name.toLowerCase().includes(this.props.searchTerm.toLowerCase()));
    } else {
      filteredArtists = this.props.artists;
    }

    const artists = filteredArtists.map((artist, idx) => (
      <li key={idx} className="index-item">
        <ArtistIndexItem
          artist={artist}
          key={artist.id}
          receiveCurrentSong={this.props.receiveCurrentSong}
          handleClick={this.handleClick}
        />
      </li>
    ));

    return(
      <div className="artist-index-container">
        <ul className="flex-master">
          {artists.length ? artists : <p>No Artists</p>}
        </ul>
      </div>
    )
  }

}

export default withRouter(ArtistIndex);