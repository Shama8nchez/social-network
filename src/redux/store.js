import { combineReducers, legacy_createStore as createStore } from "redux";
import dialogReducer from "./dialogReducer";
import profileReducer from "./profileReducer";
import usersReducer from "./usersReducer";
import authReducer from "./authReducer";

const rootReducer = combineReducers({
  dialogsDB: dialogReducer,
  postsDB: profileReducer,
  usersDB: usersReducer,
  auth: authReducer,
});

const store = createStore(rootReducer)

export default store;