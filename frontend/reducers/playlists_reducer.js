import { RECEIVE_PLAYLIST, RECEIVE_PLAYLISTS, REMOVE_PLAYLIST, REMOVE_SONG } from '../actions/playlist_actions';

const playlistReducer = (state = {}, action) => {
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
    case REMOVE_SONG:
      let newState = Object.assign({}, state);
      newPlaylist = newState[action.playlistSong.playlist_id];
      let songIds = newPlaylist.songIds;
      let songIdx = songIds.indexOf(action.playlistSong.song_id);
      songIds.splice(songIdx,1);
    default:
      return state;
  }
}


export default playlistReducer;