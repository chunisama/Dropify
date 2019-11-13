import { connect } from "react-redux";
import Player from "./player";
import { fetchSong, fetchSongs, receiveNextSong, 
    receivePrevSong, addSongQueue, getQueuePos, setSongQueue, toggleRepeat, toggleShuffle ,isPlaying } from "../../actions/song_actions";
import { fetchAlbums } from "../../actions/album_actions";
import { fetchArtists } from "../../actions/artist_actions";

const msp = (state) => {
    const { songs, albums, audio } = state.entities;
    return ({
        currentlyPlaying: audio.isPlaying, 
        currentSong: songs[audio.currentSong],
        nextSongId: audio.shuffledQueue[audio.queuePosition + 1] || (audio.repeat ? audio.shuffledQueue[0] : null),
        prevSongId: audio.shuffledQueue[audio.queuePosition - 1] || (audio.repeat ? audio.shuffledQueue[audio.shuffledQueue.length - 1] : null),
        repeat: audio.repeat,
        shuffle: audio.shuffle,
        albums,
    })
}

const mdp = (dispatch) => {
    return ({
        fetchSongs: () => dispatch(fetchSongs()),
        fetchAlbums: () => dispatch(fetchAlbums()),
        fetchArtists: () => dispatch(fetchArtists()),
        isPlaying: (boolean) => dispatch(isPlaying(boolean)),
        // figure this out
        addSongQueue: () => dispatch(addSongQueue()),
        getQueuePos: () => dispatch(getQueuePos()),
        setSongQueue: (queue) => dispatch(setSongQueue(queue)),
        // toggling green icon for looper and shuffle
        toggleLoop: () => dispatch(toggleRepeat()),
        toggleShuffle: () => dispatch(toggleShuffle()),
        // Add like functionality to player
        createLike: like => dispatch(createLike(like)),
        deleteLike: like => dispatch(deleteLike(like)),
        receiveNextSong: (id) => {
            dispatch(receiveNextSong(id));
            // if (id) dispatch(fetchSong(id));
        },
        receivePrevSong: (id) => {
            dispatch(receivePrevSong(id));
            // if (id) dispatch(fetchSong(id));
        },
    })
}

export default connect(msp, mdp)(Player);