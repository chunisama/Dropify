import { connect } from "react-redux";
import { fetchPlaylists } from "../../actions/playlist_actions";
import PlaylistIndex from "./playlist_index";

const msp = (state) => {
  return ({
    playlists: Object.values(state.entities.playlists),
  })
}

const mdp = (dispatch) => {
  return ({
    fetchPlaylists: (props) => dispatch(fetchPlaylists(props)),
  })
}

export default connect(msp,mdp)(PlaylistIndex);