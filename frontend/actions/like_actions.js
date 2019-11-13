import * as APIUtil from '../util/like_api_util';

export const RECEIVE_LIKE = 'RECEIVE_LIKE';
export const REMOVE_LIKE = 'REMOVE_LIKE';


const receiveLike = like => {
  return {
    type: RECEIVE_LIKE,
    like
  };
};

const removeLike = like => {
  return {
    type: REMOVE_LIKE,
    like
  };
};


export const createLike = like => {
  return dispatch => APIUtil.createLike(like).then((like) => {
    return dispatch(receiveLike(like))
  });
};

export const deleteLike = like => {
  return dispatch => APIUtil.deleteLike(like).then((like) => {
    return dispatch(removeLike(like))
  });
};