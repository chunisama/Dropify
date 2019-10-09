import { RECEIVE_TITLE, RECEIVE_ALBUMID, RECEIVE_PHOTO, RECEIVE_ARTISTID } from "../actions/player_actions";

const playerReducer = (state = {}, action) => {
  switch(action.type){
    case RECEIVE_TITLE:
      return Object.assign({}, state, { title: action.title });
    case RECEIVE_ALBUMID:
      return Object.assign({}, state, { albumId: action.albumId });
    case RECEIVE_PHOTO:
      return Object.assign({}, state, { photoUrl: action.photoUrl });
    case RECEIVE_ARTISTID:
      return Object.assign({}, state, { artistId: action.artist.id })
    default:
      return state;
  }
}

export default playerReducer;