import * as ApiUtil from "../util/song_api_util";

export const RECEIVE_SONG = "RECEIVE_SONG";
export const RECEIVE_SONGS = "RECEIVE_SONGS";
export const IS_PLAYING = "IS_PLAYING";
export const RECEIVE_CURRENT_SONG = 'RECEIVE_CURRENT_SONG';
export const RECEIVE_NEXT_SONG = 'RECEIVE_NEXT_SONG';
export const RECEIVE_PREV_SONG = 'RECEIVE_PREV_SONG';
export const TOGGLE_SHUFFLE = 'TOGGLE_SHUFFLE';
export const TOGGLE_REPEAT = 'TOGGLE_REPEAT';
export const SET_SONG_QUEUE = 'SET_SONG_QUEUE';
export const ADD_SONG_QUEUE = "ADD_SONG_QUEUE";
export const GET_QUEUE_POS = "GET_QUEUE_POS";

export const receiveCurrentSong = (songId) => ({
    type: RECEIVE_CURRENT_SONG,
    songId,
})

export const receiveNextSong = (songId) => ({
    type: RECEIVE_NEXT_SONG,
    songId,
})

export const receivePrevSong = (songId) => ({
    type: RECEIVE_PREV_SONG,
    songId,
})

export const toggleShuffle = () => ({
    type: TOGGLE_SHUFFLE,
})

export const toggleRepeat = () => ({
    type: TOGGLE_REPEAT,
})

export const isPlaying = (boolean) => ({
    type: IS_PLAYING,
    boolean,
})

export const setSongQueue = queue => {
    return {
      type: SET_SONG_QUEUE,
      queue,
    };
};

export const addSongQueue = songId => {
    return {
      type: ADD_SONG_QUEUE,
      songId,
    };
};

export const getQueuePos = () => {
    return { 
        type: GET_QUEUE_POS 
    };
};

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