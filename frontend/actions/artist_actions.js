export const RECEIVE_ARTIST = "RECEIVE_ARTIST";
export const RECEIVE_ALL_ARTISTS = "RECEIVE_ALL_ARTISTS";
import * as apiUtil from '../util/artist_api_util';

const receiveArtist = artist => ({
  type: RECEIVE_ARTIST,
  artist,
});

const receiveArtists = artists => ({
  type: RECEIVE_ALL_ARTISTS,
  artists,
});

export const fetchArtists = () => dispatch => {
  return apiUtil.fetchArtists().then((artists) => {
    return dispatch(receiveArtists(artists))
  });
};

export const fetchArtist = (id) => dispatch => {
  return apiUtil.fetchArtist(id).then((artist) => {
    return dispatch(receiveArtist(artist))
  });
};

