import { connect } from 'react-redux';
import { fetchSongs, receiveCurrentSong, receiveNextSong } from "../../actions/song_actions";
import SongIndex from "./song_index";

const msp = (state) => {
  const { songs } = state.entities;
  return({
    songs: Object.values(songs)
  })
}

const mdp = (dispatch) => {
  return({
    fetchSongs: () => dispatch(fetchSongs()),
    receiveCurrentSong: (song) => dispatch(receiveCurrentSong(song)),
    receiveNextSong: (song) => dispatch(receiveNextSong(song)),
    fetchSong: (id) => dispatch(fetchSong(id))
  })
}



export default connect(msp, mdp)(SongIndex);