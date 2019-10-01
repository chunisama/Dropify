import { connect } from "react-redux";
import SessionForm from "./session_form";
import React from "react";
import { signIn } from "../../actions/session_actions";

const msp = (state, ownProps) => {

  return {
    errors: state.error.session,
    formType: "login"
  };
};

const mdp = (dispatch, ownProps) => {
  return {
    
    processForm: user => dispatch(signIn(user))
  };
};

export default connect(msp,mdp)(SessionForm);
