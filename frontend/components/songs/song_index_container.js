import { connect } from 'react-redux';
import { fetchSongs, receiveCurrentSong, receiveNextSong } from "../../actions/song_actions";
import { fetchAlbums } from "../../actions/album_actions";
import { fetchArtists } from "../../actions/artist_actions";
import SongIndex from "./song_index";

const msp = (state) => {
  const { songs, albums, ui } = state.entities;
  if (ui.currentSong == 1){
  
    debugger
  }
  return({
    songs: Object.values(songs),
    albums,
    isPlaying: ui.isPlaying,
    currentSong: ui.currentSong,
  })
}

const mdp = (dispatch) => {
  return({
    fetchSongs: () => dispatch(fetchSongs()),
    receiveCurrentSong: (songId) => dispatch(receiveCurrentSong(songId)),
    // receiveNextSong: (song) => dispatch(receiveNextSong(song)),
    fetchAlbums: () => dispatch(fetchAlbums()),
    fetchArtists: () => dispatch(fetchArtists()),
    // isPlaying: (boolean) => dispatch(isPlaying(boolean)),
  })
}



export default connect(msp, mdp)(SongIndex);