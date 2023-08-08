const state = {
    postsDB: {
      posts: [
        { id: 1, post: "Hello!", likesCount: 78 },
        { id: 2, post: "yoyoy!!", likesCount: 26 },
        { id: 3, post: "aliluya!", likesCount: 11 },
        { id: 4, post: "Let's go!", likesCount: 43 },
      ],
      newPost: '',
    },
    dialogsDB: [
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
    ]
  };

  let reRender = () => {
    console.log(state);
  }
  
  export const addPost = () => {
    if (state.postsDB.newPost.trim()) {
      state.postsDB.posts.push({ id: 5, post: state.postsDB.newPost, likesCount: 0 });
      state.postsDB.newPost = '';
      reRender();
    }
  };

  export const typePost = (value) => {
    state.postsDB.newPost = value;
    reRender();
  };

  export const subscribe = (callback) => {
    reRender = callback;
  };

export default state;