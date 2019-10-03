import { connect } from "react-redux";
import SessionForm from "./session_form";
import { signUp, signIn, clearErrors } from "../../actions/session_actions";

const msp = (state) => {
  return {
    formType: "Sign up",
    errors: state.error.session
  };
};

const mdp = (dispatch) => {
  return {
    processForm: user => dispatch(signUp(user)),
    demoUser: user => dispatch(signIn(user)),
    clearErrors: () => dispatch(clearErrors())
  };
};

export default connect(msp,mdp)(SessionForm);
