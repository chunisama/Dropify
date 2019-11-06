import { connect } from "react-redux";
import Player from "./player";
import { fetchSongs, receiveCurrentSong, receiveNextSong, isPlaying } from "../../actions/song_actions";
import { fetchAlbums } from "../../actions/album_actions";
import { fetchArtists } from "../../actions/artist_actions";

const msp = (state) => {
    const { songs, albums, audio } = state.entities;
    return ({
        song: songs[audio.currentSong],
        albums,
        currentlyPlaying: audio.isPlaying, 
    })
}

const mdp = (dispatch) => {
    return ({
        fetchSongs: () => dispatch(fetchSongs()),
        fetchAlbums: () => dispatch(fetchAlbums()),
        fetchArtists: () => dispatch(fetchArtists()),
        isPlaying: (boolean) => dispatch(isPlaying(boolean)),
    })
}

export default connect(msp, mdp)(Player);