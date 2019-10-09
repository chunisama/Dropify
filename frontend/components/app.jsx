import React from "react";
import LoginFormContainer from "./session_form/login_form_container";
import SignupFormContainer from "./session_form/signup_form_container";
import Splash from "./splash";
import { Route } from "react-router-dom";
import { AuthRoute } from "../util/route_util"
import PlayerContainer from "./player/player_container";
// import ArtistIndexContainer from "./artists/artists_container";
// import SongIndexContainer  from "./songs/song_index_container";
// import AlbumIndexContainer from "./albums/albums_container";
import AlbumShow from "./albums/album_show";
import ArtistShow from "./artists/artist_show";
import Browse from "./browse/browse";
const App = () => (
  <div>
    <Route exact path="/" component={Splash} />
    <Route path="/browse"> 
      <Browse />
      <PlayerContainer />
    </Route> 
    <Route path="/albums/:albumId" component={ AlbumShow } ></Route>
    <Route path="/artists/:artistId" component={ ArtistShow }></Route>
    <Route path="/collection" />
    <AuthRoute path="/login" component={LoginFormContainer} />
    <AuthRoute path="/signup" component={SignupFormContainer} />
  </div>
);

export default App;