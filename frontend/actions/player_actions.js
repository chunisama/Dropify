import * as ApiUtil from "../util/player_api_util";

export const RECEIVE_SONG = "RECEIVE_SONG";
export const RECEIVE_SONGS = "RECEIVE_SONGS";

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