import React from "react";
import LoginFormContainer from "./session_form/login_form_container";
import SignupFormContainer from "./session_form/signup_form_container";
import Splash from "./splash";
import { Route } from "react-router-dom";
import { AuthRoute } from "../util/route_util"
import PlayerContainer from "./player/player_container";
const App = () => (
  <div>
    <Route exact path="/" component={Splash} />
    <Route path="/browse" component={PlayerContainer} />
    <AuthRoute path="/login" component={LoginFormContainer} />
    <AuthRoute path="/signup" component={SignupFormContainer} />
  </div>
);

export default App;