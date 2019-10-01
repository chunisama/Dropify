import { connect } from "react-redux";
import SessionForm from "./session_form";
import React from "react";
import { signUp } from "../../actions/session_actions";

const msp = (state, ownProps) => {
  // const errors = state.error.session ?
  //   state.error.session : null;
  return {
    formType: "signup",
    errors: state.error.session
  };
};

const mdp = (dispatch, ownProps) => {
  return {
    processForm: user => dispatch(signUp(user))
  };
};

export default connect(msp,mdp)(SessionForm);
