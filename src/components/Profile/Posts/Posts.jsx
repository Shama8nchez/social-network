import classes from './Posts.module.css';
import Post from './Post/Post';

const Posts = () => {
  return (
    <div className={classes.profile}>
      <h2>New post</h2>
      <textarea name="" id="" cols="60" rows="10"></textarea>
      <br />
      <button>Add post</button>
      <Post />
      <Post />
      <Post />
      <Post />
    </div>
  )
}

export default Posts;