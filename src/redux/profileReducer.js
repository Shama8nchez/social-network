const ADD_POST = 'ADD_POST';
const TYPE_POST = 'TYPE_POST';

export const addPostAC = () => ({type: ADD_POST});
export const typePostAC = (value) => ({type: TYPE_POST, value: value});

const profileReducer = (state, action) => {
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