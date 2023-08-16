const SET_AUTH_USER = 'SET_AUTH_USER';

export const setAuthUserAC = (authData) => ({type: SET_AUTH_USER, authData});

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
        isLogin: true,
      }
    }

    default:
      return { ...state }
  }
}

export default authReducer;