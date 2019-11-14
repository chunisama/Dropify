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
        nextSongId: audio.shuffledQueue[audio.shuffledQueue.indexOf(audio.currentSong)] || audio.shuffledQueue[audio.queuePosition + 1],
        prevSongId: audio.shuffledQueue[audio.queuePosition - 1],
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
        addSongQueue: () => dispatch(addSongQueue()),
        getQueuePos: () => dispatch(getQueuePos()),
        setSongQueue: (queue) => dispatch(setSongQueue(queue)),
        // toggling green icon for looper and shuffle
        toggleLoop: () => dispatch(toggleRepeat()),
        toggleShuffle: () => dispatch(toggleShuffle()),
        // Add like functionality to player
        createLike: like => dispatch(createLike(like)),
        deleteLike: like => dispatch(deleteLike(like)),
        receiveNextSong: (id) => { dispatch(receiveNextSong(id))},
        receivePrevSong: (id) => { dispatch(receivePrevSong(id))},
    })
}

export default connect(msp, mdp)(Player);