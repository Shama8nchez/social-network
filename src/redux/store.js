import { combineReducers, legacy_createStore as createStore } from "redux";
import dialogReducer from "./dialogReducer";
import profileReducer from "./profileReducer";

const rootReducer = combineReducers({
  dialogsDB: dialogReducer,
  postsDB: profileReducer,
});

const store = createStore(rootReducer)

export default store;