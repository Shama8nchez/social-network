import { combineReducers, legacy_createStore as createStore } from "redux";
import dialogReducer from "./dialogReducer";
import profileReducer from "./profileReducer";
import usersReducer from "./usersReducer";

const rootReducer = combineReducers({
  dialogsDB: dialogReducer,
  postsDB: profileReducer,
  usersDB: usersReducer,
});

const store = createStore(rootReducer)

export default store;