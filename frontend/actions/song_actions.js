import * as ApiUtil from "../util/song_api_util";

export const RECEIVE_SONG = "RECEIVE_SONG";
export const RECEIVE_SONGS = "RECEIVE_SONGS";
export const RECEIVE_CURRENT_SONG = 'RECEIVE_CURRENT_SONG';
export const RECEIVE_NEXT_SONG = 'RECEIVE_NEXT_SONG';
export const IS_PLAYING = "IS_PLAYING";

export const receiveCurrentSong = songId => ({
    type: RECEIVE_CURRENT_SONG,
    songId,
})

export const receiveNextSong = song => ({
    type: RECEIVE_NEXT_SONG,
    song,
})

export const isPlaying = (boolean) => ({
    type: IS_PLAYING,
    boolean,
})

const receiveSong = song => ({
    type: RECEIVE_SONG, 
    song,
})

const receiveSongs = (songs, searchTerm) => ({
    type: RECEIVE_SONGS,
    songs,
    searchTerm,
})

export const fetchSongs = (props) => dispatch => {
    return ApiUtil.fetchSongs(props).then(songs => {
        return dispatch(receiveSongs(songs, props.search_term))
    });
}

export const fetchSong = (id) => dispatch => {
    return ApiUtil.fetchSong(id).then(
        song => dispatch(receiveSong(song))
    )
}