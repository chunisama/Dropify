import { RECEIVE_ARTIST, RECEIVE_ALL_ARTISTS } from "../../actions/artist_actions";
import { RECEIVE_ALBUM } from "../../actions/album_actions";
const artistReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_ALL_ARTISTS:
      return action.artists;
    case RECEIVE_ARTIST:
      const { artist } = action.artist;
      return Object.assign({}, state, artist);
    case RECEIVE_ALBUM:
      return Object.assign({}, state, action.album.artist);
    default:
      return state;
  }
}

export default artistReducer;