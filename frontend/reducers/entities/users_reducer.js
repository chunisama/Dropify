import { RECEIVE_CURRENT_USER,LOGOUT_CURRENT_USER } from "../../actions/session_actions";
import { RECEIVE_FOLLOW, REMOVE_FOLLOW } from "../../actions/follow_actions";
import { RECEIVE_LIKE, REMOVE_LIKE } from '../../actions/like_actions';
import { merge } from 'lodash';

const _nullSession = {
  id: null
};

export default (state = _nullSession, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return Object.assign({}, { [action.currentUser.id]: action.currentUser });
    case LOGOUT_CURRENT_USER:
      return _nullSession;
    case RECEIVE_LIKE:
      const likeState = merge({}, state)
      if (action.like.likeable_type === 'Song') {
        likeState[action.like.user_id].liked_song_ids.push(action.like.likeable_id);
      } else if (action.like.likeable_type === "Album"){
        likeState[action.like.user_id].liked_album_ids.push(action.like.likeable_id);
      }
      return likeState;
    case REMOVE_LIKE:
      const removeLikeState = merge({}, state);
      const cUser = removeLikeState[action.like.user_id];
      if (action.like.likeable_type === 'Song') {
        const songIdx = cUser.liked_song_ids.indexOf(action.like.likeable_id);
        removeLikeState[action.like.user_id].liked_song_ids.splice(songIdx, 1);
      } else if (action.like.likeable_type === "Album"){
        const albumIdx = cUser.liked_album_ids.indexOf(action.like.likeable_id);
        removeLikeState[action.like.user_id].liked_album_ids.splice(albumIdx, 1);
      }
      return removeLikeState;
    case RECEIVE_FOLLOW:
      const followState = merge({}, state)
      if (action.follow.followable_type === 'Playlist') {
        followState[action.follow.user_id].followed_playlist_ids.push(action.follow.followable_id);
      } else if (action.follow.followable_type === "Artist"){
        followState[action.follow.user_id].followed_artist_ids.push(action.follow.followable_id);
      }
      return followState
    case REMOVE_FOLLOW:
      const removeFollowState = merge({}, state);
      const currentUser = removeFollowState[action.follow.user_id];
      if (action.follow.followable_type === 'Playlist') {
        const playlistIdx = currentUser.followed_playlist_ids.indexOf(action.follow.followable_id);
        removeFollowState[action.follow.user_id].followed_playlist_ids.splice(playlistIdx, 1);
      } else if (action.follow.followable_type === "Artist"){
        const artistIdx = currentUser.followed_artist_ids.indexOf(action.follow.followable_id);
        removeFollowState[action.follow.user_id].followed_artist_ids.splice(artistIdx, 1);
      }
      return removeFollowState;
    default:
      return state;
  }
};
