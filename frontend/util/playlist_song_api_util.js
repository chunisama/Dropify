export const deletePlaylistSong = (playlistsSongs) => (
  $.ajax({
    method: 'DELETE',
    url: `/api/playlists_songs/${playlistsSongs.playlist_id}`,
    data: {playlists_songs: playlistsSongs}
  })
);

export const createPlaylistSong = (playlists_songs) => {
  debugger
  return $.ajax({
    method: 'POST',
    url: `/api/playlists_songs`,
    data: {playlists_songs}
  })
};