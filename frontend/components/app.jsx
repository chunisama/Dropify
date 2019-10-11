import React from "react";
import LoginFormContainer from "./session_form/login_form_container";
import SignupFormContainer from "./session_form/signup_form_container";
import Splash from "./splash";
import { Route, Switch } from "react-router-dom";
import { AuthRoute, ProtectedRoute } from "../util/route_util"
import Main from "./main";
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
    <Switch>
    <Route exact path="/" component={Splash} />
    <AuthRoute path="/login" component={ LoginFormContainer } />
    <AuthRoute path="/signup" component={ SignupFormContainer } />
      <ProtectedRoute path="/:section" component={ Main }/>
    </Switch>
  </div>
);

export default App;