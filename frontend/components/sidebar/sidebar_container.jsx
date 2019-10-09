import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions'

const msp = (state) => {
  return({
    currentUser: state.entities.users.username,
  })
}
const mdp = (dispatch) => {
  return({
    logout: () => dispatch(logout()),
  })
}

export default connect(msp, mdp)(Sidebar);