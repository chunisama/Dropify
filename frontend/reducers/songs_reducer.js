import { RECEIVE_SONG, RECEIVE_SONGS } from "../actions/player_actions";

export default (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_SONG:
            return Object.assign({}, state, {[action.song.id]: song});
        case RECEIVE_SONGS:
            return Object.assign({}, action.songs);
        default:
            return state;
    }
}