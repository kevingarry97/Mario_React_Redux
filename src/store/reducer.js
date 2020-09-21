import { combineReducers } from "redux";
import entitiesReducer from "./entities";
import authReducer from "./auths";
import errorReducer from "./errors";

export default combineReducers({
  entities: entitiesReducer,
  auth: authReducer,
  error: errorReducer,
});
