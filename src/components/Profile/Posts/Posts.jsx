import classes from './Posts.module.css';
import Post from './Post/Post';

const Posts = () => {
  return (
    <div className={classes.profile}>
      <h2>New post</h2>
      <textarea name="" id="" cols="60" rows="10"></textarea>
      <br />
      <button>Add post</button>
      <Post post="Hello!" likesCount="78" />
      <Post post="yoyoy!" likesCount="26" />
      <Post post="aliluya!" likesCount="11" />
      <Post post="Let's go!" likesCount="43" />
    </div>
  )
}

export default Posts;