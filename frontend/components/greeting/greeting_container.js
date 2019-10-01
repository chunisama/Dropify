import { logout } from "../../actions/session_actions";
import { connect } from "react-redux";
import Greeting from "./greeting";

const mapStateToProps = ({ session, entities }) => {
  const currentUser = entities.users[session.id];
  return {
    currentUser
  };
};

const mapDispatchToProps = dispatch => {
  return {
    logout: () => {dispatch(logout())}
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Greeting);
