import { RECEIVE_ARTIST, RECEIVE_ALL_ARTISTS } from "../../actions/artist_actions";
import { RECEIVE_ALBUM } from "../../actions/album_actions";
const artistReducer = (state = {}, action) => {
  // Object.freeze(state);
  switch(action.type){
    case RECEIVE_ALL_ARTISTS:
      return Object.assign({}, state, action.artists);
    case RECEIVE_ARTIST:
      const { artist } = action.artist;
      const newState = Object.assign({}, state, artist);
      return newState;
    case RECEIVE_ALBUM:
      const otherState = Object.assign({}, state, action.album.artist);
      return otherState;
    default:
      return state;
  }
}

export default artistReducer;