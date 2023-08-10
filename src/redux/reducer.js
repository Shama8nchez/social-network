const ADD_POST = 'ADD_POST';
const TYPE_POST = 'TYPE_POST';
const SEND_MESSAGE = 'ADD_MESSAGE';
const TYPE_MESSAGE = 'TYPE_MESSAGE';

export const addPostAC = () => ({type: ADD_POST});
export const typePostAC = (value) => ({type: TYPE_POST, value: value});
export const sendMessageAC = () => ({type: SEND_MESSAGE});
export const typeMessageAC = (value) => ({type: TYPE_MESSAGE, value: value});

const reducer = (state, action) => {
  switch (action.type) {
    case ADD_POST: {
      if (state.postsDB.newPost.trim()) {
        let newPost = state.postsDB.newPost;
        state.postsDB.posts.push({ id: 5, post: newPost, likesCount: 0 });
        state.postsDB.newPost = '';
      }
      return state
    }
    case TYPE_POST: {
      state.postsDB.newPost = action.value;
      return state
    }
    case SEND_MESSAGE: {
      if (state.dialogsDB.newMessage.trim()) {
        state.dialogsDB.messages.push({ id: 4, message: state.dialogsDB.newMessage });
        state.dialogsDB.newMessage = '';
      }
      return state
    }
    case TYPE_MESSAGE: {
      state.dialogsDB.newMessage = action.value;
      return state
    }
    default:
      return state
  }
}

export default reducer;