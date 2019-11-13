import * as APIUtil from '../util/follow_api_util';

export const RECEIVE_FOLLOW = 'RECEIVE_FOLLOW';
export const REMOVE_FOLLOW = 'REMOVE_FOLLOW';

const receiveFollow = follow => {
  return {
    type: RECEIVE_FOLLOW,
    follow,
  };
};


const removeFollow = follow => {
  return {
    type: REMOVE_FOLLOW,
    follow,
  };
};


export const createFollow = follow => {
  return dispatch => APIUtil.createFollow(follow).then((follow) => {
    return dispatch(receiveFollow(follow))
  });
};

export const deleteFollow = follow => {
  return dispatch => APIUtil.deleteFollow(follow).then((follow) => {
    return dispatch(removeFollow(follow))
  });
};
