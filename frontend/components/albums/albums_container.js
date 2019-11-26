import { connect } from "react-redux";
import AlbumsIndex from "./album_index";
import { fetchAlbums, fetchAlbum } from "../../actions/album_actions";
import { fetchSongs, receiveCurrentSong } from "../../actions/song_actions";

const msp = (state) => {
  return ({
    albums: Object.values(state.entities.albums),
  })
};

const mdp = (dispatch) => {
  return({
    fetchAlbums: (props) => dispatch(fetchAlbums(props)),
    fetchAlbum: (id) => dispatch(fetchAlbum(id)),
    fetchSongs: (props) => dispatch(fetchSongs(props)),
    receiveCurrentSong: (songId) => dispatch(receiveCurrentSong(songId)),
  })
}


export default connect(msp,mdp)(AlbumsIndex);