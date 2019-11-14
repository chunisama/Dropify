import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { logout } from '../../actions/session_actions'
import Sidebar from "./sidebar";

const msp = (state) => {
  const sessionId = state.session.id;
  return({
    currentUser: state.entities.users[sessionId],
  })
}
const mdp = (dispatch) => {
  return({
    logout: () => dispatch(logout()),
  })
}

export default withRouter(connect(msp, mdp)(Sidebar));