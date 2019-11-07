import PlaylistAddModal from './playlist_add_modal';
import { connect } from 'react-redux';
import { closeModal } from '../../actions/modal_actions';

const msp = (state) => ({
  currentUserId: state.session.id,
})

const mdp = (dispatch) => ({
  closeModal: () => dispatch(closeModal()),
})

export default connect(msp, mdp)(PlaylistAddModal);