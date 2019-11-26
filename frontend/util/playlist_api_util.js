export const fetchPlaylist = (id) => (
  $.ajax({
    method: "GET",
    url: `/api/playlist/${id}`
  })
);

export const fetchPlaylists = (props) => {
  return $.ajax({
    method: "GET",
    url: `/api/playlist`,
    data: { props }
  })
}

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

