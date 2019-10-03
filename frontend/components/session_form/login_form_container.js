import { connect } from "react-redux";
import SessionForm from "./session_form";
import { signIn, clearErrors } from "../../actions/session_actions";

const msp = (state) => {

  return {
    errors: state.error.session,
    formType: "Log In"
  };
};

const mdp = (dispatch, ownProps) => {
  return {
    processForm: user => dispatch(signIn(user)),
    clearErrors: () => dispatch(clearErrors())
  };
};

export default connect(msp,mdp)(SessionForm);
