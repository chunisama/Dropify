import { connect } from 'react-redux';
import { fetchSongs, receiveCurrentSong, receiveNextSong } from "../../actions/song_actions";
import { fetchAlbums } from "../../actions/album_actions";
import SongIndex from "./song_index";

const msp = (state) => {
  const { songs, albums } = state.entities;
  return({
    songs: Object.values(songs),
    albums,
  })
}

const mdp = (dispatch) => {
  return({
    fetchSongs: () => dispatch(fetchSongs()),
    receiveCurrentSong: (songId) => dispatch(receiveCurrentSong(songId)),
    // receiveNextSong: (song) => dispatch(receiveNextSong(song)),
    fetchSong: (id) => dispatch(fetchSong(id)),
    fetchAlbums: () => dispatch(fetchAlbums()),
  })
}



export default connect(msp, mdp)(SongIndex);