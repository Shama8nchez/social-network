import authAPI from "../API/authAPI";

const SET_AUTH_USER = 'SET_AUTH_USER';

export const setAuthUserAC = (authData) => ({type: SET_AUTH_USER, authData});

export const setAuthUser = () => (dispatch) => {
  authAPI.setAuthUser().then(response => {
    if (response.data.resultCode === 0) {
      dispatch(setAuthUserAC({...response.data.data, isLogin: true}));
    }
  });
}

export const login = (email, password, rememberMe) => (dispatch) => {
  authAPI.login(email, password, rememberMe).then(response => {
    if (response.data.resultCode === 0) {
      dispatch(setAuthUser());
    }
  })
}

const initialState = {
  id: null,
  login: null,
  email: null,
  isLogin: false
}

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_AUTH_USER: {
      return { 
        ...state,
        ...action.authData,
      }
    }

    default:
      return { ...state }
  }
}

export default authReducer;