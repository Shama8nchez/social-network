import profileAPI from "../API/profileAPI";

const ADD_POST = 'ADD_POST';
const TYPE_POST = 'TYPE_POST';
const SET_PROFILE_STATUS = 'SET_PROFILE_STATUS';

export const addPostAC = () => ({type: ADD_POST});
export const typePostAC = (value) => ({type: TYPE_POST, value: value});
export const setProfileStatus = (data) => ({type: SET_PROFILE_STATUS, data});

const initialState = {
    posts: [
      { id: 1, post: "Hello!", likesCount: 78 },
      { id: 2, post: "yoyoy!!", likesCount: 26 },
      { id: 3, post: "aliluya!", likesCount: 11 },
      { id: 4, post: "Let's go!", likesCount: 43 },
    ],
    newPost: '',
    profileStatus: '',
}

export const getProfileStatus = (id) => (dispatch) => {
  profileAPI.getStatus(id).then(response => dispatch(setProfileStatus(response.data)))
}

export const sendProfileStatus = (status) => (dispatch) => {
  profileAPI.setStatus(status).then(responce => {
    if (responce.data.resultCode === 0) dispatch(setProfileStatus(status))
  })
}

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      if (state.newPost.trim()) {
        return {
          ...state,
          posts: [ ...state.posts, { id: 5, post: state.newPost, likesCount: 0 } ],
          newPost: '',
        }
      }
      break;
    }

    case TYPE_POST: {
      return {
        ...state,
        newPost: action.value
      }
    }

    case SET_PROFILE_STATUS: {
      return {
        ...state,
        profileStatus: action.data
      }
    }

    default:
      return { ...state }
  }
}

export default profileReducer;