const FOLLOW_USER = 'FOLLOW_USER';
const UNFOLLOW_USER = 'UNFOLLOW_USER';
const SET_USERS = 'SET_USERS';
const SET_PAGE = 'SET_PAGE';
const LOADING = 'LOADING';
const GET_USER = 'GET_USER';
const FOLLOWING_PROGRESS = 'FOLLOWING_PROGRESS';
const FOLLOWING_PROGRESS_END = 'FOLLOWING_PROGRESS_END';

export const followAC = (id) => ({type: FOLLOW_USER, id});
export const unfollowAC = (id) => ({type: UNFOLLOW_USER, id});
export const setUsersAC = (data) => ({type: SET_USERS, data});
export const setPageAC = (page) => ({type: SET_PAGE, page});
export const loadingAC = (isLoading) => ({type: LOADING, isLoading});
export const getUserAC = (user) => ({type: GET_USER, user});
export const followingProgressAC = (follow) => ({type: FOLLOWING_PROGRESS, follow});
export const followingProgressEndAC = (follow) => ({type: FOLLOWING_PROGRESS_END, follow});

const initialState = {
  users: [],
  totalPages: 5,
  currentPage: 1,
  isLoading: false,
  user: null,
  followingProgress: [],
}

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW_USER: {
      return { 
        ...state,
        users: [...state.users.map(user => {
          if (user.id === action.id) return {...user, followed: true};
          else return {...user}
        })]
      }
    }

    case UNFOLLOW_USER: {
      return { 
        ...state,
        users: [...state.users.map(user => {
          if (user.id === action.id) return {...user, followed: false};
          else return {...user}
        })]
      }
    }

    case SET_USERS: {
      return {
        ...state,
        users: action.data
      }
    }

    case SET_PAGE: {
      return {
        ...state,
        currentPage: action.page
      }
    }

    case LOADING: {
      return {
        ...state,
        isLoading: action.isLoading
      }
    }

    case GET_USER: {
      return {
        ...state,
        user: action.user
      }
    }

    case FOLLOWING_PROGRESS: {
      return {
        ...state,
        followingProgress: [...state.followingProgress, action.follow]
      }
    }

    case FOLLOWING_PROGRESS_END: {
      return {
        ...state,
        followingProgress: state.followingProgress.filter(id => id !== action.follow)
      }
    }

    default:
      return { ...state }
  }
}

export default usersReducer;