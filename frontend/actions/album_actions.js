export const RECEIVE_ALBUMS = 'RECEIVE_ALBUMS';
export const RECEIVE_ALBUM = 'RECEIVE_ALBUM';
import * as apiUtil from '../util/album_api_util';

const receiveAlbums = albums => ({
  type: RECEIVE_ALBUMS,
  albums,
});

const receiveAlbum = album => ({
  type: RECEIVE_ALBUM,
  album,
});

export const fetchAlbums = () => dispatch => {
  return apiUtil.fetchAlbums().then((albums) => dispatch(receiveAlbums(albums)))
};

export const fetchAlbum = id => dispatch => {
  return apiUtil.fetchAlbum(id).then((album) => dispatch(receiveAlbum(album)))
};

