import { connect } from "react-redux";
import Player from "./player";
import { fetchSongs, receiveCurrentSong, receiveNextSong } from "../../actions/song_actions";
import { fetchAlbums } from "../../actions/album_actions";
import { fetchArtists } from "../../actions/artist_actions";

const msp = (state) => {
    const { songs, albums, ui } = state.entities;
    return ({
        song: songs[ui.currentSong],
        albums,
    })
}

const mdp = (dispatch) => {
    return ({
        fetchSongs: () => dispatch(fetchSongs()),
        fetchAlbums: () => dispatch(fetchAlbums()),
        fetchArtists: () => dispatch(fetchArtists()),
    })
}

export default connect(msp, mdp)(Player);