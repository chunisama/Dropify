import React from 'react';
import AlbumsContainer from "../albums/albums_container";
import SongsContainer from "../songs/song_index_container";
import ArtistsContainer from "../artists/artists_container";
import PlaylistsContainer from "../playlists/playlist_container";
import { withRouter, Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';

class SearchResults extends React.Component {
  constructor(props){
    super(props);
    this.artistResults = this.artistResults.bind(this);
    this.albumResults = this.albumResults.bind(this);
    this.playlistResults = this.playlistResults.bind(this);
    this.songResults = this.songResults.bind(this);
    }
  
  artistResults(){
    let filteredArtists;
    if (this.props.searchTerm) {
      filteredArtists = this.props.artists.filter(artist => artist.name.toLowerCase().includes(this.props.searchTerm.toLowerCase()));
      return filteredArtists.length;
    } else {
      filteredArtists = this.props.artists;
      return filteredArtists.length;
    }
  }

  albumResults(){
    let filteredAlbums;
    if (this.props.searchTerm) {
      filteredAlbums = this.props.albums.filter(album => album.name.toLowerCase().includes(this.props.searchTerm.toLowerCase()));
      return filteredAlbums.length;
    } else {
      filteredAlbums = this.props.albums;
      return filteredAlbums.length;
    }
  }

  playlistResults(){
    let filteredPlaylists;
    if (this.props.searchTerm) {
      filteredPlaylists = this.props.playlists.filter(playlist => playlist.title.toLowerCase().includes(this.props.searchTerm.toLowerCase()));
      return filteredPlaylists.length;
    } else {
      filteredPlaylists = this.props.playlists;
      return filteredPlaylists.length;
    }
  }

  songResults(){
    let searchedSongs;
    if (this.props.searchTerm) {
      searchedSongs = this.props.songs.filter(song => song.title.toLowerCase().includes(this.props.searchTerm.toLowerCase()));
      return searchedSongs.length;
    } else {
      searchedSongs = this.props.songs;
      return searchedSongs.length;
    }
  }

  render(){
    const section = this.props.match.params.section;
    return(
      <div className="search-results">
        <div className="tabs-container">
          <ul className="tabs-list">
            <li className="content-tab">
              <Link to={`/search/top`}
                className={"app-link" + ((section === 'top') ? '-active' : '')}>
                Top Results
              </Link>
            </li>
            <li className="content-tab">
              <Link to={`/search/artists`}
                className={"app-link" + ((section === 'artists') ? '-active' : '')}>
                Artists
              </Link>
            </li>
            <li className="content-tab">
              <Link to={`/search/songs`}
                className={"app-link" + ((section === 'songs') ? '-active' : '')}>
                Songs
              </Link>
            </li>
            <li className="content-tab">
              <Link to={`/search/albums`}
                className={"app-link" + ((section === 'albums') ? '-active' : '')}>
                Albums
              </Link>
            </li>
            <li className="content-tab">
              <Link to={`/search/playlists`}
                className={"app-link" + ((section === 'playlists') ? ' active' : '')}>
                Playlists
              </Link>
            </li>
          </ul>
        </div>

        <div className="search-section">
          <Route path="/search/top" render={() => (
            <div className="top-results">
              <div className="search-section"
                style={{order: (this.artistResults() === 0 ? 2 : 1)}}>
                <h2>Artists</h2>
                <ArtistsContainer searchTerm={this.props.searchTerm} />
              </div>
              <div className="search-section"
                style={{order: (this.albumResults() === 0 ? 2 : 1)}}>
                <h2>Albums</h2>
                <AlbumsContainer searchTerm={this.props.searchTerm} />
              </div>
              <div className="search-section"
                style={{order: (this.playlistResults() === 0 ? 2 : 1)}}>
                <h2>Playlists</h2>
                <PlaylistsContainer searchTerm={this.props.searchTerm} />
              </div>
              <div className="search-section-song"
                style={{order: (this.songResults() === 0 ? 2 : 1)}}>
                <h2>Songs</h2>
                <SongsContainer searchTerm={this.props.searchTerm} />
              </div>
            </div>
          )}/>
          <Route path="/search/artists" render={
            () => <ArtistsContainer searchTerm={this.props.searchTerm} />
          }/>
          <Route path="/search/songs" render={
            () => <SongsContainer searchTerm={this.props.searchTerm} />
          }/>
          <Route path="/search/albums" render={
            () => <AlbumsContainer searchTerm={this.props.searchTerm} />
          }/>
          <Route path="/search/playlists" render={
            () => <PlaylistsContainer searchTerm={this.props.searchTerm} />
          }/>
        </div>
      </div>
    );
  }
}

const msp = (state) => {
  return ({
    artists: Object.values(state.entities.artists),
    albums: Object.values(state.entities.albums),
    playlists: Object.values(state.entities.playlists),
    songs: Object.values(state.entities.songs),
  })
}


export default withRouter(connect(msp, null)(SearchResults));


