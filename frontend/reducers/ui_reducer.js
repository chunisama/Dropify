import { RECEIVE_CURRENT_SONG, RECEIVE_NEXT_SONG, IS_PLAYING } from "../actions/song_actions";
//implement AlbumCover action here for player to display the picture's album-cover in player-show component

const _nullState = {
  currentSong: null,
  isPlaying: false,
  // nextSong: null,
}
export default (state = _nullState , action) => {
  switch (action.type) {
    case RECEIVE_CURRENT_SONG:
      return Object.assign({}, state, {currentSong: action.songId});
    case IS_PLAYING: 
      return Object.assign({}, state, {isPlaying: action.boolean})
  // case RECEIVE_NEXT_SONG:
  //   return Object.assign({}, state, {
  //     currentSong: state.currentSong,
  //     nextSong: action.song
  //   });
    default:
      return state;
  }
}