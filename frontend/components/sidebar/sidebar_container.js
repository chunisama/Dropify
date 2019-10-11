import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions'
import Sidebar from "./sidebar";

const msp = (state) => {
  // const sessionId = this.state.session[id];
  return({
    currentUser: state.entities.users,
  })
}
const mdp = (dispatch) => {
  return({
    logout: () => dispatch(logout()),
  })
}

export default connect(msp, mdp)(Sidebar);