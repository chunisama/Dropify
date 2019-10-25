export const deletePlaylistSong = (playlistsSongs) => (
  $.ajax({
    method: 'DELETE',
    url: `/api/playlists_songs/${0}`,
    data: {playlists_songs: playlistsSongs}
  })
);

export const createPlaylistSong = (playlistsSongs) => (
  $.ajax({
    method: 'POST',
    url: `/api/playlists_songs`,
    data: {playlist_songs: playlistsSongs}
  })
);