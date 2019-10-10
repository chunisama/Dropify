import { connect } from "react-redux";
import Player from "./player";
import { fetchSongs, receiveCurrentSong, receiveNextSong } from "../../actions/song_actions";


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
    })
}

export default connect(msp, mdp)(Player);