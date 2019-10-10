import React from "react";
import LoginFormContainer from "./session_form/login_form_container";
import SignupFormContainer from "./session_form/signup_form_container";
import Splash from "./splash";
import { Route } from "react-router-dom";
import { AuthRoute } from "../util/route_util"
import PlayerContainer from "./player/player_container";
import AlbumShow from "./albums/album_show";
import ArtistShow from "./artists/artist_show";
import Browse from "./browse/browse";
import SidebarContainer from "./sidebar/sidebar_container";
// Testing
// import ArtistIndexContainer from "./artists/artists_container";
// import SongIndexContainer  from "./songs/song_index_container";
// import AlbumIndexContainer from "./albums/albums_container";

const App = () => (
  <div className="dropify-container">
    <Route exact path="/" component={Splash} />
    <AuthRoute path="/login" component={ LoginFormContainer } />
    <AuthRoute path="/signup" component={ SignupFormContainer } />
    <div className="top-container">
    <div className="background"></div>
    </div>
    <div className="main-wrapper">
    <Route path="/:section" component={ SidebarContainer }></Route>
    <Route path="/browse" component={ Browse }></Route>
    <Route path="/albums/:albumId" component={ AlbumShow }></Route>
    <Route path="/artists/:artistId" component={ ArtistShow }></Route>
    <Route path="/collection" ></Route>
    </div>
    <div>
    <Route path="/:section" component={ PlayerContainer }></Route>
    </div>
  </div>
);

export default App;