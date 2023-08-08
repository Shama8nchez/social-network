import Posts from './Posts/Posts';
import classes from './Profile.module.css';

const Profile = (props) => {
  return (
    <div className={classes.profile}>
      <img src="https://www.everwallpaper.co.uk/cdn/shop/collections/marble-geometry-wallpaper-mural.jpg?v=1660198030" alt="wp" className={classes.wp} />
      <div>Ava + description</div>
      <Posts posts={props.posts} addPost={props.addPost} typePost={props.typePost} newPost={props.newPost}  />
    </div>
  )
}

export default Profile;