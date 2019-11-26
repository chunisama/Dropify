export const fetchAlbum = (id) => {
  return(
    $.ajax({
      method: 'GET',
      url: `/api/albums/${id}`
    })
  )
}

export const fetchAlbums = (props) => {
  return(
    $.ajax({
      method: 'GET',
      url: `/api/albums`,
      data: { props },
    })
  )
}