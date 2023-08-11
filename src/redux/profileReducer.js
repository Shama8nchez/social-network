const ADD_POST = 'ADD_POST';
const TYPE_POST = 'TYPE_POST';

export const addPostAC = () => ({type: ADD_POST});
export const typePostAC = (value) => ({type: TYPE_POST, value: value});

const initialState = {
    posts: [
      { id: 1, post: "Hello!", likesCount: 78 },
      { id: 2, post: "yoyoy!!", likesCount: 26 },
      { id: 3, post: "aliluya!", likesCount: 11 },
      { id: 4, post: "Let's go!", likesCount: 43 },
    ],
    newPost: '',
}

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      if (state.newPost.trim()) {
        let newPost = state.newPost;
        state.posts.push({ id: 5, post: newPost, likesCount: 0 });
        state.newPost = '';
      }
      return state
    }

    case TYPE_POST: {
      state.newPost = action.value;
      return state
    }

    default:
      return state
  }
}

export default profileReducer;