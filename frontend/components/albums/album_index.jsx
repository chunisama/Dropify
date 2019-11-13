import React from "react";
import AlbumIndexItem from "./album_index_item";
import { withRouter } from 'react-router-dom';

const arrayEq = (a1, a2) => {
  return ( a1.length === a2.length && a1.every((val, idx) => val === a2[idx]) );
};

class AlbumIndex extends React.Component {
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount(){
    // this.props.fetchSongs();
    this.props.fetchAlbums({
      album_ids: this.props.albumIds,
      search_term: this.props.searchTerm
    });
  }

  componentDidUpdate(prevProps){
    if (
      (prevProps.albumIds && !arrayEq(this.props.albumIds,prevProps.albumIds)) ||
      (prevProps.searchTerm && this.props.searchTerm !== prevProps.searchTerm)
    ) {
      this.props.fetchAlbums({
        album_ids: prevProps.albumIds,
        search_term: prevProps.searchTerm
      });
    }
  }

  // Playing a song by clicking on album
  handleClick(album){
    return (e) => {
      if (!e.target.classList.contains("fas", "fa-play-circle")){
        this.props.history.push(`/album/${album.id}`)
      }
    }
  }

  render(){
    if (this.props.albums.length == 0){
      return (
        <div className="loading-icon"><i className="fas fa-spinner fa-spin"></i></div>
      )
    }

    let filteredAlbums;
    if (this.props.searchTerm) {
      filteredAlbums = this.props.albums.filter(album => album.name.toLowerCase().includes(this.props.searchTerm.toLowerCase()));
    } else {
      filteredAlbums = this.props.albums;
    }

    const albumIndexItems = () => {
      return(
      filteredAlbums.map((album, idx) => (
        <li key={idx} className="index-item">
        <AlbumIndexItem 
          album={album}
          key={album.id}
          receiveCurrentSong={this.props.receiveCurrentSong}
          handleClick={this.handleClick}
          />
        </li>
        ))
      )
    } 
    return(
      <div className="albums-index-container"> 
        <ul className="flex-master">
          {albumIndexItems().length ? albumIndexItems() : <p>No Albums</p>}
        </ul>
      </div>
    )
  }
}

export default withRouter(AlbumIndex);