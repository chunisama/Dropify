export const RECEIVE_PLAYLIST = "RECEIVE_PLAYLIST";
export const RECEIVE_PLAYLISTS = "RECEIVE_PLAYLISTS";
export const REMOVE_PLAYLIST = "REMOVE_PLAYLIST";
export const REMOVE_SONG = "REMOVE_SONG";
import * as ApiUtil from "../util/playlist_api_util";


const receivePlaylist = playlist => ({
  type: RECEIVE_PLAYLIST,
  playlist,
})

const receivePlaylists = playlists => ({
  type: RECEIVE_PLAYLISTS,
  playlists,
})

const removePlaylist = (playlistId) => ({
  type: REMOVE_PLAYLIST,
  playlistId,
})

const removeSong = (playlistSong) => ({
    type: REMOVE_SONG,
    playlistSong,
})

export const fetchPlaylists = () => dispatch => {
  return ApiUtil.fetchPlaylists().then((playlists) => {
    return dispatch(receivePlaylists(playlists))
  });
};

export const fetchPlaylist = (id) => dispatch => {
  return ApiUtil.fetchPlaylist(id).then((playlist) => {
    return dispatch(receivePlaylist(playlist))
  });
};

export const updatePlaylist = (id, songId) => dispatch => {
  return ApiUtil.updatePlaylist(id, songId).then((playlist) => {
    return dispatch(receiveplaylist(playlist))
  });
};
export const deletePlaylist = (id) => dispatch => {
  return ApiUtil.deletePlaylist(id).then((playlist) => {
    return dispatch(removePlaylist(playlist.id))
  });
};

export const deleteSong = (playlistSong) => dispatch => (
  ApiUtil.deleteSong(playlistSong).then((playlistSong) => {
    return dispatch(removeSong(playlistSong))
  })
);







