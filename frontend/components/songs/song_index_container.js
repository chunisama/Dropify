import { connect } from 'react-redux';
import { fetchSongs, receiveCurrentSong, receiveNextSong, isPlaying } from "../../actions/song_actions";
import { fetchAlbums } from "../../actions/album_actions";
import { fetchArtists } from "../../actions/artist_actions";
import SongIndex from "./song_index";

const msp = (state) => {
  const { songs, albums, audio } = state.entities;
  return({
    songs: Object.values(songs),
    albums,
    isPlaying: audio.isPlaying,
    currentSong: audio.currentSong,
  })
}

const mdp = (dispatch) => {
  return({
    fetchSongs: () => dispatch(fetchSongs()),
    receiveCurrentSong: (songId) => dispatch(receiveCurrentSong(songId)),
    // receiveNextSong: (song) => dispatch(receiveNextSong(song)),
    fetchAlbums: () => dispatch(fetchAlbums()),
    fetchArtists: () => dispatch(fetchArtists()),
    currentlyPlaying: (boolean) => dispatch(isPlaying(boolean)),
  })
}



export default connect(msp, mdp)(SongIndex);