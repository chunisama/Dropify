import PlaylistDeleteModal from './playlist_delete_modal';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { deletePlaylist } from '../../actions/playlist_actions';
import { closeModal } from '../../actions/modal_actions';

const msp = (state) => ({
  currentUserId: state.session.currentUserId
});

const mdp = (dispatch) => ({
  createPlaylist: playlistId => dispatch(deletePlaylist(playlistId)),
  closeModal: () => dispatch(closeModal()),
});

export default withRouter(connect(msp, mdp)(PlaylistDeleteModal));