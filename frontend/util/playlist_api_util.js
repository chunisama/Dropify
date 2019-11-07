export const fetchPlaylist = (id) => (
  $.ajax({
    method: "GET",
    url: `/api/playlist/${id}`
  })
);
export const fetchPlaylists = () => (
  $.ajax({
    method: "GET",
    url: `/api/playlist`
  })
);

export const createPlaylist = (playlist) => (
  $.ajax({
    method: "POST",
    url: '/api/playlist',
    data: { playlist: playlist }
  })
);

export const deletePlaylist = (id) => (
  $.ajax({
    method: "DELETE",
    url: `/api/playlist/${id}`
  })
);

