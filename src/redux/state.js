import dialogReducer from "./dialogReducer";
import profileReducer from "./profileReducer";

const store = {
  state: {
    postsDB: {
      posts: [
        { id: 1, post: "Hello!", likesCount: 78 },
        { id: 2, post: "yoyoy!!", likesCount: 26 },
        { id: 3, post: "aliluya!", likesCount: 11 },
        { id: 4, post: "Let's go!", likesCount: 43 },
      ],
      newPost: '',
    },
    dialogsDB: {
      dialogsUsers: [
        { id: 1, userName: 'Andrey' },
        { id: 2, userName: 'Anna' },
        { id: 3, userName: 'Eugeniy' },
        { id: 4, userName: 'Fedor' },
        { id: 5, userName: 'Denis' },
      ],
      messages: [
        { id: 1, message: 'Hello!' },
        { id: 2, message: 'How are you?' },
        { id: 3, message: 'Have fun!' },
      ],
      newMessage: '',
    },
  },

  reRender() {
    console.log(this.state);
  },

  dispatch(action) {
    this.state.dialogsDB = dialogReducer(this.state.dialogsDB, action);
    this.state.postsDB = profileReducer(this.state.postsDB, action)
    this.reRender();
  },

  subscribe(callback) {
    this.reRender = callback;
  },
}

export default store;