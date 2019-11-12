import React from 'react';
import AlbumsContainer from "../albums/albums_container";
import SongsContainer from "../songs/song_index_container";
import ArtistsContainer from "../artists/artists_container";
import PlaylistsContainer from "../playlists/playlist_container";
import { withRouter, Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';

class SearchResults extends React.Component {
  render(){
    const section = this.props.match.params.section;
    return(
      <div className="search-results">
        <div className="tabs-container">
          <ul className="tabs-list">
            <li className="content-tab">
              <Link to={`/search/top`}
                className={"app-link" + ((section === 'top') ? ' active' : '')}>
                Top Results
              </Link>
            </li>
            <li className="content-tab">
              <Link to={`/search/artists`}
                className={"app-link" + ((section === 'artists') ? ' active' : '')}>
                Artists
              </Link>
            </li>
            <li className="content-tab">
              <Link to={`/search/songs`}
                className={"app-link" + ((section === 'songs') ? ' active' : '')}>
                Songs
              </Link>
            </li>
            <li className="content-tab">
              <Link to={`/search/albums`}
                className={"app-link" + ((section === 'albums') ? ' active' : '')}>
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
                style={{order: (this.props.numArtists === 0 ? 2 : 1)}}>
                <h2>Artists</h2>
                <ArtistsContainer searchTerm={this.props.searchTerm} />
              </div>
              <div className="search-section"
                style={{order: (this.props.numAlbums === 0 ? 2 : 1)}}>
                <h2>Albums</h2>
                <AlbumsContainer searchTerm={this.props.searchTerm} />
              </div>
              <div className="search-section"
                style={{order: (this.props.numPlaylists === 0 ? 2 : 1)}}>
                <h2>Playlists</h2>
                <PlaylistsContainer searchTerm={this.props.searchTerm} />
              </div>
              <div className="search-section"
                style={{order: (this.props.numSongs === 0 ? 2 : 1)}}>
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

const msp = (state) => ({
  numArtists: Object.keys(state.entities.artists).length,
  numAlbums: Object.keys(state.entities.albums).length,
  numPlaylists: Object.keys(state.entities.playlists).length,
  numSongs: Object.keys(state.entities.songs).length,
});

export default withRouter(connect(msp, null)(SearchResults));


