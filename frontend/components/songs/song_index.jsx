import React from "react";
import SongIndexItem from "./song_index_item";

const arrayEq = (a1, a2) => {
  return ( a1.length === a2.length && a1.every((val, idx) => val === a2[idx]) );
};

class SongIndex extends React.Component {
  constructor(props){
  super(props);
  }

  componentDidMount(){
    this.props.fetchSongs({
      song_ids: this.props.songIds,
      search_term: this.props.searchTerm,
    });
    this.props.fetchAlbums();
    // this.props.fetchArtists();
  }

  compondentDidUpdate(prevProps){
    if (
      (prevProps.songIds && !arrayEq(this.props.songIds,prevProps.songIds)) ||
      (prevProps.searchTerm && this.props.searchTerm !== prevProps.searchTerm)
    ) {
      this.props.fetchSongs({
        song_ids: prevProps.songIds,
        search_term: prevProps.searchTerm
      });
    }
  }

  render(){
    if (this.props.songs.length == 0){
      return (
        <div className="loading-icon"><i className="fas fa-spinner fa-spin"></i></div>
      )
    }

    let searchedSongs;
    if (this.props.searchTerm) {
      searchedSongs = this.props.songs.filter(song => song.title.toLowerCase().includes(this.props.searchTerm.toLowerCase()));
    } else {
      searchedSongs = this.props.songs;
    }

    let filteredSongs;
    if (this.props.songIds) {
      filteredSongs = searchedSongs.filter(song => this.props.songIds.includes(song.id));
    } else {
      filteredSongs = searchedSongs;
    }

    let sortedSongs;
    let ids;
    if (this.props.songIds && filteredSongs.length && filteredSongs.length === this.props.songIds.length) {
      sortedSongs = this.props.songIds.map(id => filteredSongs.find(obj => obj.id === id ))
      ids = this.props.songIds;
    } else {
      sortedSongs = filteredSongs;
      ids = filteredSongs.map(song => song.id);
    }

    const songIndexItems = () => {
      return(
      searchedSongs.map((song) => (
        <SongIndexItem
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
        ))
      )
    }
    return(
      <div className="song-index-container">
        <ul className="song-index">
          {songIndexItems().length ? songIndexItems() : <p>No Songs</p>}
        </ul>
      </div>
    )
  }

}


export default SongIndex;