import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import CollectionNav from './collection_nav';
import AlbumIndex from '../albums/albums_container';
import SongIndex from '../songs/song_index_container';
import PlaylistIndex from '../playlists/playlist_container';
import ArtistIndex from '../artists/artists_container';


const Collection = (props) => {
  const artistIds = props.currentUser.followed_artist_ids.length ? props.currentUser.followed_artist_ids : [];
  const playlistIds = props.currentUser.followed_playlist_ids.length ? props.currentUser.followed_playlist_ids : [];
  const albumIds = props.currentUser.liked_album_ids.length ? props.currentUser.liked_album_ids : [];
  const songIds = props.currentUser.liked_song_ids.length ? props.currentUser.liked_song_ids : [];
  return (
    <div className="collection-container">
      <Route exact path="/collection" render={() => <Redirect to="/collection/artists" />} />
      <Route path="/collection/:section" component={CollectionNav} />

      <div className="collection-content">
        <Route path="/collection/artists"
          render={() => {return (<ArtistIndex artistIds={artistIds} />);}}/>
        <Route path="/collection/songs"
          render={() => { return (<SongIndex songIds={songIds} />);}}/>
        <Route path="/collection/albums"
          render={() => { return (<AlbumIndex albumIds={albumIds} />);}}/>
        <Route path="/collection/playlists"
          render={() => { return (<PlaylistIndex playlistIds={playlistIds} />);}}/>
      </div>
    </div>
  )
}


const mapStateToProps = state => ({
  currentUser: state.entities.users[state.session.id],
});

export default connect(mapStateToProps, null)(Collection);