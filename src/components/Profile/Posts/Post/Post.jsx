import classes from './Post.module.css';

const Post = (props) => {
  return (
      <div>
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZdblbGSMjQAUhh058K1lUYPSVC2dWBNk1EQ&usqp=CAU' alt='ava' className={classes.ava} />
        <span>{props.post}</span>
        <br />
        <span>Likes</span> {props.likesCount}
      </div>
  )
}

export default Post;