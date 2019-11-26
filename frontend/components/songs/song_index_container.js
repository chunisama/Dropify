import { connect } from 'react-redux';
import { fetchSongs, receiveCurrentSong , isPlaying, 
setSongQueue, addSongQueue } from "../../actions/song_actions";
import { fetchAlbums } from "../../actions/album_actions";
import { fetchArtists } from "../../actions/artist_actions";
import SongIndex from "./song_index";
import { openDropdown, setDropdownProps } from "../../actions/dropdown_actions";

const msp = (state) => {
  const { songs, albums, audio } = state.entities;
  return({
    songs: Object.values(songs),
    songQueueIds: Object.keys(songs).map((songId) => {
      return parseInt(songId);
    }),
    albums,
    isPlaying: audio.isPlaying,
    currentSong: audio.currentSong,
  })
}

const mdp = (dispatch) => {
  return({
    fetchSongs: (props) => dispatch(fetchSongs(props)),
    receiveCurrentSong: (songId) => dispatch(receiveCurrentSong(songId)),
    fetchAlbums: (props) => dispatch(fetchAlbums(props)),
    fetchArtists: (props) => dispatch(fetchArtists(props)),
    currentlyPlaying: (boolean) => dispatch(isPlaying(boolean)),
    openDropdown: pos => dispatch(openDropdown(pos)),
    setDropdownProps: props => dispatch(setDropdownProps(props)),
    setSongQueue: (queue) => dispatch(setSongQueue(queue)),
    addSongQueue: (songId) => dispatch(addSongQueue(songId)),
  })
}



export default connect(msp, mdp)(SongIndex);