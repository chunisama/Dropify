import { RECEIVE_SONG, RECEIVE_SONGS } from "../../actions/song_actions";
import { RECEIVE_ARTIST } from "../../actions/artist_actions"; 
import { RECEIVE_ALBUM } from "../../actions/album_actions";
import { RECEIVE_PLAYLIST } from "../../actions/playlist_actions";

const nullState = {};

export default (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_SONG:
            return Object.assign({}, state, {[action.song.id]: action.song});
        case RECEIVE_SONGS:
            if (action.searchTerm) {
                return Object.assign({}, state, action.songs);
            } else {
                return Object.assign({}, state, action.songs);
            }
        case RECEIVE_ARTIST:
            const newState = Object.assign({}, nullState, action.artist.song);
            return newState;
        case RECEIVE_ALBUM:
            const otherState = Object.assign({}, nullState, action.album.song);
            return otherState;
        case RECEIVE_PLAYLIST:
            const playlistState = Object.assign({}, nullState, action.playlist.song);
            return playlistState;
        default:
            return state;
    }
}