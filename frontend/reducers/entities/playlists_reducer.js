import { RECEIVE_PLAYLIST, RECEIVE_PLAYLISTS, REMOVE_PLAYLIST } from '../../actions/playlist_actions';
import { RECEIVE_PLAYLIST_SONG, DELETE_PLAYLIST_SONG } from '../../actions/playlist_song_actions';
import { merge } from 'lodash';

const playlistReducer = (state = {}, action) => {
  // Object.freeze(state);
  switch(action.type){
    case RECEIVE_PLAYLISTS:
      return action.playlists;
    case RECEIVE_PLAYLIST:
      const newState = merge({}, state);
      newState[action.playlist.id] = action.playlist;
      return newState;
    case REMOVE_PLAYLIST:
      const removedState = merge({}, state);
      delete removedState[action.playlistId];
      return removedState;
    case RECEIVE_PLAYLIST_SONG:
      const alteredState = merge({}, state);
      alteredState[action.playlistSong.playlist_id].song_ids.push(action.playlistSong.song_id);
      return alteredState;
    case DELETE_PLAYLIST_SONG:
      const deletedState = merge({}, state);
      const arr = deletedState[action.playlistSong.playlist_id].song_ids;
      const songIdx = arr.indexOf(action.playlistSong.song_id);
      deletedState[action.playlistSong.playlist_id].song_ids.splice(songIdx, 1);
      return deletedState;
    default:
      return state;
  }
}


export default playlistReducer;