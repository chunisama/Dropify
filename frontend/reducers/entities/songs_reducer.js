import { RECEIVE_SONG, RECEIVE_SONGS } from "../../actions/song_actions";
import { RECEIVE_ARTIST } from "../../actions/artist_actions"; 
import { RECEIVE_ALBUM } from "../../actions/album_actions";
import { RECEIVE_PLAYLIST } from "../../actions/playlist_actions";
import { merge } from 'lodash';

export default (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_SONG:
            return Object.assign({}, state, {[action.song.id]: action.song});
        case RECEIVE_SONGS:
            if (action.searchTerm) {
                return action.songs;
            } else {
                return merge({}, state, action.songs);
            }
        case RECEIVE_ARTIST:
            return Object.assign({}, state, action.artist.song);
        case RECEIVE_ALBUM:
            return Object.assign({}, state, action.album.song);
        case RECEIVE_PLAYLIST:
            return Object.assign({}, state, action.playlist.song)
        default:
            return state;
    }
}