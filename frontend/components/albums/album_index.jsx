import React from "react";
import AlbumIndexItem from "./album_index_item";
import { withRouter } from 'react-router-dom';

class AlbumIndex extends React.Component {
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount(){
    this.props.fetchSongs();
    this.props.fetchAlbums();
  }

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
    const albumIndexItems = () => {
      return(
        <div className="albums-index-container">
          <div className="albums">
            {this.props.albums.map((album) => (
              <AlbumIndexItem 
                album={album}
                key={album.id}
                receiveCurrentSong={this.props.receiveCurrentSong}
                handleClick={this.handleClick}
                />
            ))}
          </div>
        </div>
      )
    } 
    return(
      <>
        {albumIndexItems()}
      </>
    )
  }
}

export default withRouter(AlbumIndex);