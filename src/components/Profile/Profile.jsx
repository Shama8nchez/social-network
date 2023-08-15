import PostsContainer from './Posts/PostsContainer';
import classes from './Profile.module.css';
import unknown from '../../assets/unknown.png'
import Loader from '../Loader/Loader';

const Profile = (props) => {
  return (
    props.user ?
      <div className={classes.profile}>
        <img src="https://www.everwallpaper.co.uk/cdn/shop/collections/marble-geometry-wallpaper-mural.jpg?v=1660198030" alt="wp" className={classes.wp} />
        <h2>{props.user.fullName}</h2>
        <div className={classes.profileInfo}>
          <img src={props.user.photos.large ? props.user.photos.large : unknown} alt="user_photo" className={classes.profilePhoto} />
          <div>
            <p>Status: {props.user.aboutMe}</p>
          </div>
        </div>
        <PostsContainer />
      </div> : 
      <Loader />
    
  )
}

export default Profile;