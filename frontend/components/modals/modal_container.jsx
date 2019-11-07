import React from 'react';
import { connect } from 'react-redux';
import { closeModal } from '../../actions/modal_actions';
import PlaylistCreateModalContainer from './playlist_create_modal_container';
import PlaylistAddModalContainer from './playlist_add_modal_container';
import PlaylistDeleteModalContainer from './playlist_delete_modal_container';

const ModalContainer = (props) => {
  let component;
  switch (props.modal.component) {
    case 'create':
      component = <PlaylistCreateModalContainer />
      break;
    case 'add':
      component = <PlaylistAddModalContainer modalProps={props.modal.modalProps} />
      break;
    case 'delete':
      component = <PlaylistDeleteModalContainer modaProps={props.modal.modalProps} />
      break;
  }
  return (
    <div className={"modal" + (props.modal.isOpen ? "" : " hidden")} onClick={props.close}>
    <div className="modal-content-container" onClick={(e) => { e.stopPropagation(); }}>
      {component}
    </div>
  </div>
  );
};

const msp = (state) => ({
  modal: state.ui.modal,
});

const mdp = (dispatch) => ({
  close: () => dispatch(closeModal()),
});

export default connect(msp, mdp)(ModalContainer);