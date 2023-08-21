import { applyMiddleware, combineReducers, legacy_createStore as createStore } from "redux";
import dialogReducer from "./dialogReducer";
import profileReducer from "./profileReducer";
import usersReducer from "./usersReducer";
import authReducer from "./authReducer";
import ThunkMiddleware from "redux-thunk";
import appReducer from "./appReducer";

const rootReducer = combineReducers({
  dialogsDB: dialogReducer,
  postsDB: profileReducer,
  usersDB: usersReducer,
  auth: authReducer,
  app: appReducer,
});

const store = createStore(rootReducer, applyMiddleware(ThunkMiddleware))

export default store;