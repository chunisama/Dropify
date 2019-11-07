import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import BrowseNav from "./browse_nav";
import AlbumsContainer from "../albums/albums_container";
import SongsContainer from "../songs/song_index_container";
import ArtistsContainer from "../artists/artists_container";
import PlaylistsContainer from "../playlists/playlist_container";

const Browse = (props) => {
  return (
    <div className="main-content-container">
      <div className="browse-container">
      <Route exact path="/browse" render={() => <Redirect to="/browse/artists" />}/>
      <Route to="/browse/:section" component={BrowseNav}></Route>
      <div className="browse-content">
        <Route exact path="/browse/artists" component={ArtistsContainer}></Route>
        <Route exact path="/browse/albums" component={AlbumsContainer}></Route>
        <Route exact path="/browse/songs" component={SongsContainer}></Route>
        <Route exact path="/browse/playlists" component={PlaylistsContainer}></Route>
      </div>
      </div>
    </div>
  )
}

export default Browse;