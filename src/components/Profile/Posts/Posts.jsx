import classes from './Posts.module.css';
import Post from './Post/Post';

const Posts = (props) => {
  const addPost = () => {
    props.addPost()
  }
  
  return (
    <div className={classes.profile}>
      <h2>New post</h2>
      <textarea name="" id="" cols="60" rows="10"></textarea>
      <br />
      <button onClick={addPost} >Add post</button>
      {props.posts.map((post) => (<Post key={post.id} post={post.post} likesCount={post.likesCount} />))}
    </div>
  )
}

export default Posts;