import PlaylistCreateModal from './playlist_create_modal_container';
import { connect } from 'react-redux';
import { createPlaylist } from '../../actions/playlist_actions';
import { closeModal } from '../../actions/modal_actions';

const msp = (state) => ({
  currentUserId: state.session.currentUserId
});

const mdp = (dispatch) => ({
  createPlaylist: playlist => dispatch(createPlaylist(playlist)),
  closeModal: () => dispatch(closeModal()),
});

export default connect(msp, mdp)(PlaylistCreateModal);