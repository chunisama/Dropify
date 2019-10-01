import React from 'react';
import { Link } from "react-router-dom";

const Greeting = (props) => {
  const personalGreeting = () => (
    <div>
      <h1>{props.currentUser.username}</h1>
      <button onClick={() => props.logout()}>Logout</button>
    </div>
  );
  const sessionLinks = () => (
    <div>
      <Link to="/login">Login</Link>
      <br /> 
      <Link to="/signup">Sign Up</Link>
    </div>
  );

  return props.currentUser ? personalGreeting() : sessionLinks();

};

export default Greeting;  