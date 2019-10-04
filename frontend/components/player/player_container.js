import { connect } from "react-redux";
import Player from "./player";
import { fetchSongs, fetchSong } from "../../actions/player_actions";


const msp = (state) => {
    const { songs } = state.entities;
    return ({
        songs: Object.values(songs)
    })
}

const mdp = (dispatch) => {
    return ({
        fetchSongs: () => dispatch(fetchSongs()),
    })
}

export default connect(msp, mdp)(Player);