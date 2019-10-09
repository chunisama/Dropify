export const fetchPlaylist = () => (
  $.ajax({
    method: "GET",
    url: `/api/playlists/${id}`
  })
);
export const fetchPlaylists = () => (
  $.ajax({
    method: "GET",
    url: `/api/playlists`
  })
);

export const createPlaylist = (playlist) => (
  $.ajax({
    method: "POST",
    url: '/api/playlists',
    data: { playlist }
  })
);

export const deletePlaylist = (id) => (
  $.ajax({
    method: "DELETE",
    url: `/api/playlists/${id}`
  })
)

export const updatePlaylist = (id, songId="nil") => (
  $.ajax({
    method: 'PATCH',
    url: `/api/playlists/${id}`,
    data: { songId }
  })
)

export const deleteSong = (playlistsSongs) => (
  $.ajax({
    method: 'delete',
    url: `/api/playlists_songs/destroy`,
    data: {playlists_songs: playlistsSongs}
  })
)
