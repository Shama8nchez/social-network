import { setAuthUser } from "./authReducer";

const SET_APP = 'SET_APP';

export const setAppAC = () => ({type: SET_APP});

export const initializingApp = () => (dispatch) => {
  let initializing = dispatch(setAuthUser());
  initializing.then(() => dispatch(setAppAC()))
}

const initialState = {
  isInitialized: false
}

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_APP: {
      return { 
        ...state,
        isInitialized: true
      }
    }

    default:
      return { ...state }
  }
}

export default appReducer;