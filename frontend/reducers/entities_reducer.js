import { combineReducers } from "redux";
import usersReducer from "./users_reducer";
import songsReducer from "./songs_reducer"
import ui_reducer from "./ui_reducer";
const entitiesReducer = combineReducers({
  users: usersReducer,
  songs: songsReducer,
  ui: ui_reducer,
});

export default entitiesReducer;
