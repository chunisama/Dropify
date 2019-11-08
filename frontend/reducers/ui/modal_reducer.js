import { OPEN_MODAL, CLOSE_MODAL, SET_MODAL_COMPONENT, SET_MODAL_PROPS } from '../../actions/modal_actions';

const defaultState = {
  isOpen: false,
  component: 'create',
  modalProps: {},
}

const modalReducer = (state = defaultState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case OPEN_MODAL:
      return Object.assign({}, state, {isOpen: true});
    case CLOSE_MODAL:
      return Object.assign({}, state, {isOpen: false});
    case SET_MODAL_COMPONENT:
      return Object.assign({}, state, {component: action.component});
    case SET_MODAL_PROPS:
      return Object.assign({}, state, {modalProps: action.props});
    default:
      return state;
  }
};

export default modalReducer;