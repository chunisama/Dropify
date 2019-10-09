import { RECEIVE_ARTIST, RECEIVE_ALL_ARTISTS } from "../actions/artist_actions";

const artistReducer = (state = {}, action) => {
  switch(action.type){
    case RECEIVE_ALL_ARTISTS:
        return action.artists;
    case RECEIVE_ARTIST:
      return Object.assign({}, state, {[action.artist.id]: action.artist});
    default:
      return state;
  }
}

export default artistReducer;