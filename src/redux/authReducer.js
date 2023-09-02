import authAPI from "../API/authAPI";

const SET_AUTH_USER = 'SET_AUTH_USER';
const GET_CAPTCHA = 'GET_CAPTCHA';
const SHOW_NOTIFICATION ='SHOW_NOTIFICATION';

export const setAuthUserAC = (authData) => ({type: SET_AUTH_USER, authData});
export const getCapthaSuccess = (captcha) => ({type: GET_CAPTCHA, captcha});
export const showError = (text) => ({type: SHOW_NOTIFICATION, text});

export const setAuthUser = () => async (dispatch) => {
  return authAPI.setAuthUser().then(response => {
    if (response.data.resultCode === 0) {
      dispatch(setAuthUserAC({...response.data.data, isLogin: true}));
    } else dispatch(setAuthUserAC({
      id: null,
      login: null,
      email: null,
      isLogin: false
    }));
  });
}

export const login = (email, password, rememberMe, captcha) => (dispatch) => {
  dispatch(showError('Wait...'));
  authAPI.login(email, password, rememberMe, captcha).then(response => {
    if (response.data.resultCode === 0) {
      dispatch(setAuthUser());
      dispatch(showError(''));
    } else if (response.data.resultCode === 10) {
      dispatch(getCaptcha());
      dispatch(showError('Incorrect email or password'));
    } else {
      dispatch(showError('Incorrect email or password'));
    }
  })
}

export const logout = () => (dispatch) => {
  authAPI.logout().then(response => {
    if (response.data.resultCode === 0) {
      dispatch(setAuthUser());
    }
  })
}

export const getCaptcha = () => (dispatch) => {
  authAPI.getCaptcha().then(response => {
    dispatch(getCapthaSuccess(response.data.url))
  })
}

const initialState = {
  id: null,
  login: null,
  email: null,
  isLogin: false,
  captcha: null,
  errorText: '',
}

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_AUTH_USER: {
      return { 
        ...state,
        ...action.authData,
      }
    }

    case GET_CAPTCHA: {
      return { 
        ...state,
        captcha: action.captcha,
      }
    }

    case SHOW_NOTIFICATION: {
      return { 
        ...state,
        errorText: action.text,
      }
    }

    default:
      return { ...state }
  }
}

export default authReducer;