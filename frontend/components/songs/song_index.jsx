import React from "react";
import SongIndexItem from "./song_index_item";

class SongIndex extends React.Component {
  constructor(props){
  super(props);
  // this.audio = new Audio();
  }

  componentDidMount(){
    this.props.fetchSongs();
    this.props.fetchAlbums();
    // this.props.fetchArtists();
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
          <ul className="song-index">
            {this.props.songs.map((song) => (
              // this.audio = new Audio(song.songUrl),
              <SongIndexItem
                // duration={this.audio.duration}
                song={song}
                key={song.id}
                receiveCurrentSong={this.props.receiveCurrentSong}
                album={this.props.albums[song.album_id]}
                isPlaying={this.props.isPlaying}
                currentSong={this.props.currentSong}
                currentlyPlaying={this.props.currentlyPlaying}
                openDropdown={this.props.openDropdown}
                setDropdownProps={this.props.setDropdownProps}
                />
              ))}
          </ul>
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