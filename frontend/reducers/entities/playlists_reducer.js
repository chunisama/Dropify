import { RECEIVE_PLAYLIST, RECEIVE_PLAYLISTS, REMOVE_PLAYLIST } from '../../actions/playlist_actions';
import { RECEIVE_PLAYLIST_SONG, DELETE_PLAYLIST_SONG } from '../../actions/playlist_song_actions';

const playlistReducer = (state = {}, action) => {
  Object.freeze(state);
  let newPlaylist;
  switch(action.type){
    case RECEIVE_PLAYLISTS:
      return action.playlists;
    case RECEIVE_PLAYLIST:
      return Object.assign({}, state, {[action.playlist.id]: action.playlist});
    case REMOVE_PLAYLIST:
      newPlaylist = Object.assign({}, state);
      delete Playlist[action.playlistId];
      return newPlaylist;
    case RECEIVE_PLAYLIST_SONG:
      newPlaylist = Object.assign({}, state);
      newPlaylist[action.playlistsSongs.playlist_id].song_ids.push(action.playlistsSongs.song_id);
      return newPlaylist;
    case DELETE_PLAYLIST_SONG:
      newPlaylist = Object.assign({}, state);
      const arr = newPlaylist[action.playlistsSongs.playlist_id].song_ids;
      const songIdx = arr.indexOf(action.playlistsSongs.song_id);
      newPlaylist[action.playlistsSongs.playlist_id].song_ids.splice(songIdx, 1);
      return newPlaylist;
    default:
      return state;
  }
}


export default playlistReducer;