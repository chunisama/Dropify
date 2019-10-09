import { RECEIVE_ALBUM, RECEIVE_ALBUMS } from "../actions/album_actions";
import { RECEIVE_ARTIST } from "../actions/artist_actions";

const albumsReducer = (state = {}, action) => {
  switch(action.type){
    case RECEIVE_ALBUMS:
      return action.albums;
    case RECEIVE_ALBUM:
      const { album } = action.album
      return Object.assign({}, state, album)
    case RECEIVE_ARTIST:
      return Object.assign({}, state, action.artist.album);
    default: 
    return state;
  }
}

export default albumsReducer;