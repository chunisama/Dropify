import { combineReducers } from "redux";
import usersReducer from "./users_reducer";
import songsReducer from "./songs_reducer"
import audioReducer from "./audio_reducer";
import albumReducer from "./albums_reducer";
import artistReducer from "./artists_reducer";
import playlistReducer from "./playlists_reducer";

const entitiesReducer = combineReducers({
  users: usersReducer,
  songs: songsReducer,
  audio: audioReducer,
  albums: albumReducer,
  artists: artistReducer,
  playlists: playlistReducer,
});

export default entitiesReducer;
