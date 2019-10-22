import { connect } from "react-redux";
import { fetchPlaylists, fetchPlaylist, updatePlaylist, deletePlaylist, deleteSong } from "../../actions/playlist_actions";
import PlaylistIndex from "./playlist_index";

const msp = (state) => {
  return ({
    playlists: Object.values(state.entities.playlists),
  })
}

const mdp = (dispatch) => {
  return ({
    fetchPlaylists: () => dispatch(fetchPlaylists()),
    fetchPlaylist: (id) => dispatch(fetchPlaylist(id)),
    updatePlaylist: (id, songId) => dispatch(updatePlaylist(id, songId)),
    deletePlaylist: (id) => dispatch(deletePlaylist(id)),
    deleteSong: (playlistSong) => dispatch(deleteSong(playlistSong)),
  })
}

export default connect(msp,mdp)(PlaylistIndex);