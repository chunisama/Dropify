import React from "react";
import GreetingContainer from "./greeting/greeting_container";
import LoginFormContainer from "./session_form/login_form_container";
import SignupFormContainer from "./session_form/signup_form_container";
import Splash from "./splash";
import { Route } from "react-router-dom";
import { AuthRoute } from "../util/route_util"
const App = () => (
  <div>
    {/* <header>
      <h1>Dropify</h1>
      <GreetingContainer />
    </header> */}
    
    <Route path="/" component={Splash} />
    <AuthRoute path="/login" component={LoginFormContainer} />
    <AuthRoute path="/signup" component={SignupFormContainer} />
  </div>
);

export default App;