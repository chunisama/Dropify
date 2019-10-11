import { connect } from "react-redux";
import Player from "./player";
import { fetchSongs, receiveCurrentSong, receiveNextSong, isPlaying } from "../../actions/song_actions";
import { fetchAlbums } from "../../actions/album_actions";
import { fetchArtists } from "../../actions/artist_actions";

const msp = (state) => {
    const { songs, albums, ui } = state.entities;
    return ({
        song: songs[ui.currentSong],
        isPlaying,
        albums,
        
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