import * as ApiUtil from "../util/song_api_util";

export const RECEIVE_SONG = "RECEIVE_SONG";
export const RECEIVE_SONGS = "RECEIVE_SONGS";
export const RECEIVE_CURRENT_SONG = 'RECEIVE_CURRENT_SONG';
export const RECEIVE_NEXT_SONG = 'RECEIVE_NEXT_SONG';

export const receiveCurrentSong = song => ({
    type: RECEIVE_CURRENT_SONG,
    song
})

export const receiveNextSong = song => ({
    type: RECEIVE_NEXT_SONG,
    song
})

const receiveSong = song => ({
    type: RECEIVE_SONG, 
    song,
})

const receiveSongs = songs => ({
    type: RECEIVE_SONGS,
    songs,
})

export const fetchSongs = () => dispatch => {
    return ApiUtil.fetchSongs().then(
        songs => dispatch(receiveSongs(songs))
    )
}

export const fetchSong = (id) => dispatch => {
    return ApiUtil.fetchSong(id).then(
        song => dispatch(receiveSong(song))
    )
}