import { combineReducers } from "redux";
import errorsReducer from "./errors/errors_reducer";
import sessionReducer from "./session/session_reducer";
import entitiesReducer from "./entities/entities_reducer";
import uiReducer from "./ui/ui_reducer";

const RootReducer = combineReducers({
  entities: entitiesReducer,
  session: sessionReducer,
  error: errorsReducer,
  ui: uiReducer,
});

export default RootReducer;
