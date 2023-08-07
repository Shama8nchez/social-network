import classes from './Post.module.css';

const Post = () => {
  return (
      <div>
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZdblbGSMjQAUhh058K1lUYPSVC2dWBNk1EQ&usqp=CAU' alt='ava' className={classes.ava} />
        <span>Hello</span>
        <br />
        <span>Likes</span> 5
      </div>
  )
}

export default Post;