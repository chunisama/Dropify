import { combineReducers } from "redux";
import usersReducer from "./users_reducer";
import songsReducer from "./songs_reducer"
import uiReducer from "./ui_reducer";
import albumReducer from "./albums_reducer";
import artistReducer from "./artists_reducer";

const entitiesReducer = combineReducers({
  users: usersReducer,
  songs: songsReducer,
  ui: uiReducer,
  albums: albumReducer,
  artists: artistReducer,
});

export default entitiesReducer;
