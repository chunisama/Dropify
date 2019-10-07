import { RECEIVE_CURRENT_SONG, RECEIVE_NEXT_SONG } from "../actions/song_actions";
//implement AlbumCover action here for player to display the picture's album-cover in player-show component

const _nullState = {
  currentSong: null,
  // nextSong: null,
}
export default (state = _nullState , action) => {
  switch (action.type) {
    case RECEIVE_CURRENT_SONG:
      return Object.assign({}, state, {currentSong: action.song.id});
    // case RECEIVE_NEXT_SONG:
    //   return Object.assign({}, state, {
    //     currentSong: state.currentSong,
    //     nextSong: action.song
    //   });
    default:
      return _nullState;
  }
}