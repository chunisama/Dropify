import { connect } from "react-redux";
import { fetchAlbums, fetchAlbum } from "../../actions/album_actions";
import { fetchSongs, receiveCurrentSong } from "../../actions/song_actions";
import { fetchArtists, fetchArtist } from "../../actions/artist_actions";
import ArtistIndex from "./artists_index";

const msp = (state) => {
  return ({
    artists: Object.values(state.entities.artists),
  })
};

const mdp = (dispatch) => {
  return({
    fetchAlbums: (props) => dispatch(fetchAlbums(props)),
    fetchSongs: (props) => dispatch(fetchSongs(props)),
    fetchArtists: (props) => dispatch(fetchArtists(props)),
    receiveCurrentSong: (songId) => dispatch(receiveCurrentSong(songId)),
    fetchAlbum: (id) => dispatch(fetchAlbum(id)),
    fetchArtist: (id) => dispatch(fetchArtist(id)),
  })
};

export default connect(msp, mdp)(ArtistIndex);