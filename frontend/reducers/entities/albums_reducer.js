import { RECEIVE_ALBUM, RECEIVE_ALBUMS } from "../../actions/album_actions";
import { RECEIVE_ARTIST } from "../../actions/artist_actions";

const albumsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_ALBUMS:
      return Object.assign({}, state, action.albums);
    case RECEIVE_ALBUM:
      const { album } = action.album
      const newState = Object.assign({}, state, album);
      return newState;
    case RECEIVE_ARTIST:
      const otherState = Object.assign({}, state, action.artist.album);
      return otherState;
    default: 
    return state;
  }
}

export default albumsReducer;