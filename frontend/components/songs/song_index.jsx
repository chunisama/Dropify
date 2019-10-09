import React from "react";
import SongIndexItem from "./song_index_item";

class SongIndex extends React.Component {
  constructor(props){
  super(props);
  }

  componentDidMount(){
    this.props.fetchSongs();
    this.props.fetchAlbums();
    this.props.fetchArtists();
  }

  render(){
    if (this.props.songs.length == 0){
      return (
        <div className="loading-icon"><i className="fas fa-spinner fa-spin"></i></div>
      )
    }
    const songIndexItems = () => {
      return(
        <div className="song-index-container">
          <div className="song-index">
            {this.props.songs.map((song) => (
              <SongIndexItem 
                song={song}
                key={song.id}
                receiveCurrentSong={this.props.receiveCurrentSong}
                album={this.props.albums[song.album_id]}
                />
              ))}
          </div>
        </div>
      )
    }
    return(
      <>
        {songIndexItems()}
      </>
    )
  }

}


export default SongIndex;