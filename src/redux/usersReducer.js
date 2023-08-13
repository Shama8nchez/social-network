const FOLLOW_USER = 'FOLLOW_USER';
const UNFOLLOW_USER = 'UNFOLLOW_USER';

export const followAC = (id) => ({type: FOLLOW_USER, id});
export const unfollowAC = (id) => ({type: UNFOLLOW_USER, id});

const initialState = {
    users: [
      { id: 1, userName: 'Andrey', isFollow: true, status: 'maybe next time', location: {country: 'Belarus', city: 'Minsk'} },
      { id: 2, userName: 'Jana', isFollow: true, status: 'hello world', location: {country: 'Kyiv', city: 'Ukraine'} },
      { id: 3, userName: 'Leon', isFollow: true, status: 'san francisco', location: {country: 'Belarus', city: 'Minsk'} },
      { id: 4, userName: 'Frank', isFollow: false, status: 'have fun', location: {country: 'Belarus', city: 'Grodno'} },
      { id: 5, userName: 'Valery', isFollow: true, status: 'come on', location: {country: 'Poland', city: 'Krakow'} },
      { id: 6, userName: 'Olga', isFollow: false, status: 'i believe i can fly', location: {country: 'Spain', city: 'Vigo'} },
    ],
}

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW_USER: {
      return { 
        ...state,
        users: [...state.users.map(user => {
          if (user.id === action.id) return {...user, isFollow: true};
          else return {...user}
        })]
      }
    }

    case UNFOLLOW_USER: {
      return { 
        ...state,
        users: [...state.users.map(user => {
          if (user.id === action.id) return {...user, isFollow: false};
          else return {...user}
        })]
      }
    }

    default:
      return { ...state }
  }
}

export default usersReducer;