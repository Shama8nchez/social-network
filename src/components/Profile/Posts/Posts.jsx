import classes from './Posts.module.css';
import Post from './Post/Post';
import React from 'react';
import { addPostAC, typePostAC } from '../../../redux/state';

const Posts = (props) => {
  const addPost = () => {
    props.dispatch(addPostAC())
  }

  let textAreaRef = React.createRef();

  const typePost = () => {
    let newText = textAreaRef.current.value;
    props.dispatch(typePostAC(newText))
  }

  return (
    <div className={classes.profile}>
      <h2>New post</h2>
      <textarea ref={textAreaRef} name="" id="" cols="60" rows="10" value={props.newPost} onChange={typePost}></textarea>
      <br />
      <button onClick={addPost} >Add post</button>
      {props.posts.map((post) => (<Post key={post.id} post={post.post} likesCount={post.likesCount} />))}
    </div>
  )
}

export default Posts;