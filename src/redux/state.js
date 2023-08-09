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
    switch (action.type) {
      case 'ADD_POST': {
        if (this.state.postsDB.newPost.trim()) {
          this.state.postsDB.posts.push({ id: 5, post: this.state.postsDB.newPost, likesCount: 0 });
          this.state.postsDB.newPost = '';
          this.reRender();
        }
        break
      }
      case 'TYPE_POST': {
        this.state.postsDB.newPost = action.value;
        break
      }
      case 'ADD_MESSAGE': {
        if (this.state.dialogsDB.newMessage.trim()) {
          this.state.dialogsDB.messages.push({ id: 4, message: this.state.dialogsDB.newMessage });
          this.state.dialogsDB.newMessage = '';
        }
        break
      }
      case 'TYPE_MESSAGE': {
        this.state.dialogsDB.newMessage = action.value;
        break;
      }
      default:
        return
    }

    this.reRender();
  },

  /* addPost() {
    if (this.state.postsDB.newPost.trim()) {
      this.state.postsDB.posts.push({ id: 5, post: this.state.postsDB.newPost, likesCount: 0 });
      this.state.postsDB.newPost = '';
      this.reRender();
    }
  },

  typePost(value) {
    this.state.postsDB.newPost = value;
    this.reRender();
  },

  addMessage() {
    if (this.state.dialogsDB.newMessage.trim()) {
      this.state.dialogsDB.messages.push({ id: 4, message: this.state.dialogsDB.newMessage });
      this.state.dialogsDB.newMessage = '';
      this.reRender();
    }
  },

  typeMessage(value) {
    this.state.dialogsDB.newMessage = value;
    this.reRender();
  }, */

  subscribe(callback) {
    this.reRender = callback;
  },
}

export default store;