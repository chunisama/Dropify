export const fetchArtists = (props) => (
  $.ajax({
    method: 'GET',
    url: `api/artists`,
    data: { props },
  })
);

export const fetchArtist = id => (
  $.ajax({
    method: 'GET',
    url: `api/artists/${id}`
  })
);



