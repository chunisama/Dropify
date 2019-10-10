import React from "react";
import { Route } from "react-router-dom";
import SidebarContainer from "./sidebar/sidebar_container";
import ArtistIndexContainer from "./artists/artists_container";
import SongIndexContainer  from "./songs/song_index_container";
import AlbumIndexContainer from "./albums/albums_container";
import PlayerContainer from "./player/player_container";
import Browse from "./browse/browse";
import AlbumShow from "./albums/album_show";
import ArtistShow from "./artists/artist_show";


const Main = (props) => {
  return (
    <>
      <div className="main-wrapper">
        <div className="background">
          <Route path="/:section" component={ SidebarContainer }></Route>
          <Route path="/browse" component={ Browse }></Route>
          <Route path="/albums/:albumId" component={ AlbumShow }></Route>
          <Route path="/artists/:artistId" component={ ArtistShow }></Route>
          <Route path="/collection" ></Route>
        </div>
      </div>
      <PlayerContainer />
    </>
  )
}
export default Main;