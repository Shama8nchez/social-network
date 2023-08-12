import React from 'react';
import { addPostAC, typePostAC } from '../../../redux/profileReducer';
import Posts from './Posts';

const PostsContainer = (props) => {
  const state = props.store.getState().postsDB;
  const addPost = () => {
    props.store.dispatch(addPostAC())
  }

  const typePost = (newText) => {
    props.store.dispatch(typePostAC(newText));
  }

  return (
    <Posts addPost={addPost} typePost={typePost} posts={state.posts} newPost={state.newPost} />
  )
}

export default PostsContainer;