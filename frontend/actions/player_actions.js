export const RECEIVE_TITLE = "RECEIVE_TITLE";
export const RECEIVE_ALBUMID = "RECEIVE_ALBUMID";
export const RECEIVE_PHOTO = "RECEIVE_PHOTO";
export const RECEIVE_ARTISTID = "RECEIVE_ARTISTID";

export const setTitle = title => ({
  type: RECEIVE_TITLE,
  title,
})

export const setAlbumId = albumId => ({
  type: RECEIVE_ALBUMID,
  albumId,
})

export const setPhoto = photoUrl => ({
  type: RECEIVE_PHOTO,
  photoUrl,
})

export const setArtistId = artistId => ({
  type: RECEIVE_ARTISTID,
  artistId,
})

