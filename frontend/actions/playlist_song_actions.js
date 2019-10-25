import * as ApiUtil from "../util/playlist_song_api_util";

export const RECEIVE_PLAYLIST_SONG = 'RECEIVE_PLAYLIST_SONG';
export const DELETE_PLAYLIST_SONG = 'REMOVE_PLAYLIST_SONG';

const receivePlaylistSong = playlistSong => ({
  type: RECEIVE_PLAYLIST_SONG,
  playlistSong,
})

const deletePlaylistSong = playlistSong => ({
  type: DELETE_PLAYLIST_SONG,
  playlistSong,
})

export const addPlaylistSong = (playlistSong) => dispatch => {
  return ApiUtil.createPlaylistSong(playlistSong).then((playlistSong) => {
    return dispatch(receivePlaylistSong(playlistSong))
  });
};

export const removePlaylistSong = (playlistSong) => dispatch => {
  return ApiUtil.deletePlaylistSong(playlistSong).then((playlistSong) => {
    return dispatch(deletePlaylistSong(playlistSong))
  });
};