import {RECEIVE_ALBUM, RECEIVE_ALBUMS } from "../actions/album_actions";

const albumsReducer = (state = {}, action) => {
  switch(action.type){
    case RECEIVE_ALBUMS:
      return action.albums;
    case RECEIVE_ALBUM:
      return Object.assign({}, state, action.album)
    default: 
    return state;
  }
}

export default albumsReducer;